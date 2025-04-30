//question_1
let smallWindow = null;

function openSmallWindow() {
    // Open a small window
    smallWindow = window.open('', 'smallWindow', 'width=400,height=300');

    // Write content to the small window
    smallWindow.document.write(`
        <html>
        <body>
            <h1>My Name iS Nariman</h1>
            <p>I am a student at iti</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </body>
        </html>
    `);

    smallWindow.document.close(); 
    smallWindow.addEventListener('load', () => {
        smallWindow.scrollTo(0, smallWindow.document.body.scrollHeight);
    });
}

//questtion_2


//question_3
setInterval(() => {
    const now = new Date();
    document.title = now.toLocaleString();
  }, 1000);

  window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const age = params.get("age");

    if (name && age) {
      const userData = {
        name: name,
        age: age
      };
      console.log(userData);
    }
  };

