from flask import Flask, render_template, request, redirect, url_for, jsonify
import mysql.connector
import hashlib

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

@app.route('/registration_complete')
def registration_complete():
    return render_template('./registration_complete.html')

@app.route('/login', methods = ['GET', 'POST'])
def login():
    if request.method == 'POST':
        user_name = request.form['user_name']
        password = request.form['password']

        hashed_password = hashlib.sha256(password.encode()).hexdigest()

        cursor.execute("SELECT * FROM users WHERE user_name = %s AND password = %s", (user_name, hashed_password))
        user = cursor.fetchone()

        if user:
            return render_template('reservation.html')
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

@app.route('/api/parking', methods = ['GET'])
def get_parking():
    cursor.execute("SELECT * FROM parking")
    parking = cursor.fetchall()
    
    parking_json = []
    for row in parking:
        parking_json.append({
            'id': row[0],
            'parking_number': row[1],
            'status':row[2],
            'start_date':row[3],
            'end_date':row[4]
        })

    return jsonify(parking_json)

@app.route('/api/parking/update', methods=['POST'])
def update_parking():
    data = request.get_json()

    parking_id = data['parking_id']
    status = data['status']
    start_date = data['start_date']
    end_date = data['end_date']

    cursor.execute("UPDATE parking SET status = %s, start_date = %s, end_date = %s WHERE id = %s", (status, start_date, end_date, parking_id))
    mydb.commit()

    return jsonify({'message': 'Actualización exitosa'})


@app.route('/reservation')
def reservation():
    cursor.execute("SELECT * FROM parking")
    parking = cursor.fetchall()
    print(parking)

    return render_template('reservation.html')
    
if __name__ == '__main__':
    app.run(debug = True)