from flask import Flask

app = Flask(__name__)


@app.route("/", methods=['GET'])
def get():
    return "<h1>Team Tomato Welcomes You</h1>"

if __name__ == '__main__':
    app.run()