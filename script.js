<!DOCTYPE html>
<html>
<head>
    <title>My Motivation to Become a Developer</title>
    <style>
        body {
            background-color: #f0f8ff;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 30px;
            text-align: center;
        }

        h1 {
            color: #007bff;
            font-size: 32px;
            margin-bottom: 20px;
        }

        p {
            background-color: #ffffe0;
            border: 1px solid #ccc;
            padding: 20px;
            width: 70%;
            margin: 0 auto;
            border-radius: 8px;
            font-size: 18px;
            transition: background-color 0.5s; /* smooth color change */
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<h1>Why I want to become a developer?</h1>

<p id="motivation">
    I want to become a software developer because I am passionate about solving problems 
    using technology. Programming allows me to create solutions that can make people's 
    lives easier, automate tasks, and innovate new tools. I enjoy learning new programming 
    languages and frameworks, and I am motivated by the challenge of building efficient, 
    user-friendly software. Being a developer also provides the opportunity to work in 
    a constantly evolving field, collaborate with creative minds, and contribute to projects 
    that can have a real impact on society.
</p>

<button onclick="highlightParagraph()">Highlight Paragraph</button>

<script>
function highlightParagraph() {
    let para = document.getElementById("motivation");
    para.style.backgroundColor = "#ffeb3b"; // bright yellow
}
</script>

</body>
</html>

