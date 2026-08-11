from flask import Flask, render_template
import requests

app = Flask(__name__)

# Change this to your actual GitHub username
GITHUB_USERNAME = "Freddy-Htoo"

@app.route("/")
def home():
    projects = []
    try:
        response = requests.get(
            f"https://api.github.com/users/{GITHUB_USERNAME}/repos",
            params={"sort": "updated", "per_page": 6},
            timeout=5
        )
        response.raise_for_status()
        repos = response.json()

        # Convert GitHub's fields into the shape our template expects
        for repo in repos:
            projects.append({
                "title": repo["name"],
                "description": repo["description"] or "No description provided.",
                "link": repo["html_url"]
            })
    except requests.exceptions.RequestException as e:
        # If the API call fails (rate limit, no internet, bad username, etc.)
        # fall back to an empty list so the page still loads instead of crashing.
        print(f"Could not fetch GitHub repos: {e}")

    return render_template("index.html", projects=projects)

if __name__ == "__main__":
    app.run(debug=True)
