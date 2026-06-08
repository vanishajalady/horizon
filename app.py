from flask import Flask, render_template

app = Flask(__name__)

projects = [
    (
        1,
        "API Gateway Simulation",
        "A backend project that simulates an API Gateway by routing requests, handling authentication, and managing traffic between services.",
        "Python, FastAPI, PostgreSQL, REST APIs"
    ),
    (
        2,
        "Student Management System",
        "Manage student records and data using a database-driven web application.",
        "Python, Flask, PostgreSQL"
    ),
    (
        3,
        "Pick and Place Robot",
        "A robotic system designed to identify, pick, and place objects accurately using programmed control logic and automation techniques.",
        "Arduino Uno, HC-05 Bluetooth, L298N Motor Driver, Servo Motor, Embedded C/C++"
    )
]

@app.route("/")
def home():

    return render_template(
        "index.html",
        projects=projects
    )

if __name__ == "__main__":
    app.run()