Project features
* JSX(JavaScript Syntax Extension):  JSX is a combination of HTML and JavaScript. You can embed JavaScript objects inside the HTML elements. JSX is not supported by the browsers, as a result Babel compiler transcompile the code into JavaScript code. JSX makes codes easy and understandable. It is easy to learn if you know HTML and JavaScript.
* Virtual DOM: DOM stands for Document Object Model. It is the most important part of the web as it divides into modules and executes the code. Usually, JavaScript Frameworks updates the whole DOM at once, which makes the web application slow. But react uses virtual DOM which is an exact copy of real DOM. Whenever there is a modification in the web application, the whole virtual DOM is updated first and finds the difference between real DOM and Virtual DOM. Once it finds the difference, then DOM updates only the part that has changed recently and everything remains the same. 
* One-way Data Binding: One-way data binding, the name itself says that it is a one-direction flow. The data in react flows only in one direction i.e. the data is transferred from top to bottom i.e. from parent components to child components. The properties(props) in the child component cannot return the data to its parent component but it can have communication with the parent components to modify the states according to the provided inputs. This is the working process of one-way data binding. This keeps everything modular and fast.


* Props This got me into trouble which I struggled to solve so put it first.  If a props error occurs then write according to the type of props like if it is an array type then write the props type as an array and if it is a number then write it according to the number but if there are multiple props then separate them with commas otherwise the error will remain. Second the hassle of setting up the remaining hours in the sidebar also bothered me more than I thought about showing negative numbers.  I didn't understand how to do it after googling it, then I saw the conceptual session and it didn't work either, but the problem was solved by reducing. In the end, I got into the trouble of toast, saw this on YouTube and then connected toast from the Toastify github.