from flask import Flask, render_template, request, redirect, url_for, jsonify
import mysql.connector
import hashlib
import pandas as pd

app = Flask(__name__)

# Configuración para desactivar la caché de archivos estáticos
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

#database connection
mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "123456789",
    database = "parking_project"
    )

cursor = mydb.cursor()

@app.route('/')
def index():
    return render_template('./index.html')

@app.route('/login', methods = ['GET', 'POST'])
def login():
    if request.method == 'POST':
        user_name = request.form['user_name']
        password = request.form['password']

        hashed_password = hashlib.sha256(password.encode()).hexdigest()

        cursor.execute("SELECT * FROM users WHERE user_name = %s AND password = %s", (user_name, hashed_password))
        user = cursor.fetchone()

        if user:
            # Realizar una consulta SQL para obtener los datos de estacionamientos
            cursor.execute("SELECT * FROM parking")
            parking_data = cursor.fetchall()
            print(parking_data)
            # Enviar los datos a la plantilla HTML
            return render_template('reservation.html', parking_data=parking_data)
        else:
            return "Inicio de sesión NO exitoso"
    else:
        return render_template('login.html')


@app.route('/registration', methods = ['GET', 'POST'])
def registration():
    if request.method == 'POST':
        first_name = request.form['first_name'].capitalize()
        last_name = request.form['last_name'].capitalize()
        user_name = request.form['user_name']
        password = request.form['password']

        hashed_password = hashlib.sha256(password.encode()).hexdigest()

        #inserting data into database
        sql = "INSERT INTO users (first_name, last_name, user_name, password) VALUES (%s, %s, %s, %s)"
        val = (first_name, last_name, user_name, hashed_password)
        cursor.execute(sql, val)
        mydb.commit()

        return redirect(url_for('registration_complete'))

    return render_template('registration.html')

@app.route('/registration_complete')
def registration_complete():
    return render_template('./registration_complete.html')


# reservation

@app.route('/reservation')
def reservation():
    try:
        # Realizar una consulta SQL para obtener los datos de estacionamientos
        cursor.execute("SELECT * FROM parking")
        parking_data = cursor.fetchall()

        # Formatear las fechas
        formatted_parking_data = []
        for parking in parking_data:
            formatted_parking = list(parking)
            formatted_parking[3] = parking[3].strftime('%Y-%m-%dT%H:%M') if parking[3] else ''
            formatted_parking[4] = parking[4].strftime('%Y-%m-%dT%H:%M') if parking[4] else ''
            formatted_parking_data.append(formatted_parking)

        # Enviar los datos a la plantilla HTML
        return render_template('reservation.html', parking_data=formatted_parking_data)
    except Exception as e:
        # Imprimir cualquier error que ocurra
        print(str(e))


@app.route('/update_parking', methods=['POST'])
def update_parking():
    parking_data = request.form.getlist('parking_id')
    status_data = request.form.getlist('status')
    start_date_data = request.form.getlist('start_date')
    end_date_data = request.form.getlist('end_date')

    for i in range(len(parking_data)):
        sql = "UPDATE parking SET status=%s, start_date=%s, end_date=%s WHERE id=%s"
        # Maneja el caso cuando no se selecciona ninguna fecha
        start_date = start_date_data[i] if start_date_data[i] else None
        end_date = end_date_data[i] if end_date_data[i] else None
        val = (status_data[i], start_date, end_date, parking_data[i])
        cursor.execute(sql, val)
        mydb.commit()
    
    # return redirect(url_for('confirmation'))
    return redirect(url_for('registration_complete'))


if __name__ == '__main__':
    app.run(debug = True)