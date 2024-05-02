from flask import Flask, jsonify,send_file
from flask_cors import CORS
import os
import numpy as np


import pandas as pd


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route("/assemble")
def assemble():
    # Load Excel data into a DataFrame
    df = pd.read_excel('.task_result.xlsx')

    # Convert DataFrame to HTML
    html_table = df.to_html()

    # Write HTML to a file
    with open('output.html', 'w') as f:
        f.write(html_table)
    
    return send_file("output.html", as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)





