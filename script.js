const navBtn = document.querySelectorAll('.navbtn');

const text = document.querySelector('.text')


const paragraphe = [
    "This is the content for the First Tab - Welcome to our website!",
    "This is the content for the Second Tab - About our services.",
    "This is the content for the Third Tab - Our portfolio and projects.",
    "This is the content for the Fourth Tab - Contact information.",
    "This is the content for the Fifth Tab - Our team members.",
    "This is the content for the Sixth Tab - Latest news and updates.",
    "This is the content for the Seventh Tab - FAQ and support."
];

navBtn.forEach((button, i) =>
{
    button.addEventListener('click', function()
    {
        navBtn.forEach(btn =>
        {
            btn.querySelector('.navTitle').style.color = 'gray';
            btn.classList.remove('selected');
        });

        this.classList.add('selected');

        this.querySelector('.navTitle').style.color = 'black';



        text.textContent = paragraphe[i];


        
        // Alternative method using switch case

        // const tabName = this.querySelector('.navTitle').textContent;

        // console.log(tabName); // this will print the name of the clicked tab.


        // switch (tabName)
        // {
        //     case 'First Tab':
        //         text.textContent = "This is the content for the First Tab - Welcome to our website!";
        //         break ;
        //     case 'Second Tab':
        //         text.textContent = "This is the content for the First Tab - Welcome to our website!";
        //         break ;
        //         .
        //         .
        //         .
        //         .
        //     default:
        //         text.textContent = `Content for ${tabName}`;

        // }
    });
});

