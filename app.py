from flask import Flask, render_template

app = Flask(__name__)

# Edit this list to add/remove your own projects.
# Each project shows up as a card on the homepage.
projects = [
    {
        "title": "Project One",
        "description": "A short description of what this project does and what you used to build it.",
        "link": "https://github.com/yourusername/project-one"
    },
    {
        "title": "Project Two",
        "description": "Another project description goes here.",
        "link": "https://github.com/yourusername/project-two"
    },
    {
        "title": "Project Three",
        "description": "A third project description goes here.",
        "link": "https://github.com/yourusername/project-three"
    },
]

@app.route("/")
def home():
    return render_template("index.html", projects=projects)

if __name__ == "__main__":
    app.run(debug=True)
