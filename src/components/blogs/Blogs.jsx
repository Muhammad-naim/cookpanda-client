import React from 'react';
import './blogs.css'
const Blogs = () => {
    return (
        <div className='px-4'>
            
            <div>
                <div>
                    <h2 className='question'>What is the differences between uncontrolled and controlled components?</h2>
                    <p className='answer'>In react, controlled components are those who's state and behavior is controlled by it's parent component via props. So there has to be a dat flow from parent to child components.,<br />
                        Uncontrolled components doesn't require any props or data from parent component. In uncontrolled components, all the changes in it's state and behavior are decoded by it's own functionalities and user user interactions.
                        <br />
                        Generally controlled components are faster than uncontrolled components and they contain less complex codes as they don't maintain their states and are handled by parent component.
                    </p>
                </div>
                <div>
                    <h2 className='question'>How to validate React props using PropTypes?</h2>
                    <p className='answer'>propsTypes is used to validate the props passed down to a component from parent component. First we define the expected type of the props then we check if thes props is that expected type or not. If the props type is different then it'll console an warnning in development mode. <br />
                        Currently propsTypes is removed from react since v-15 and included into another package called 'prop-types'.</p>
                </div>
                <div>
                    <h2 className='question'>difference between nodejs and express js</h2>
                    <p className='answer'>
                        nodejs is neither framework nor programming language but an open source cross platform that runs javascript code outside of browser. it is used to build i/o applications and it's functionalities on both client-side and server-side. <br />
                        expressjs is a framework that is build to simplify the server-side functionalities like API handling. It is written in c,c++, javascript.
                    </p>
                </div>
                <div>
                    <h2 className='question'>What is a custom hook, and why will you create a custom hook?</h2>
                    <p className='answer'>
                        Custom hooks are function that contain set of logics which needed in different components. It improves the reusablity of the logics or functions and minimize redandency of the code. Custom hooks also the rendering speed of the code as it does not need to be rendered again and again while rendering the whole code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;