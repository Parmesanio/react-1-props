# Project Summary

This project is designed to introduce you to not only multiple components, but reuseable ones too.  We will be coding a product creation page utilizing what you have learned so far.

The purpose of this exercise is to better understand and practice several concepts:

- Creating methods in React.
- Using ```props```.
- Multiple Components.
- ```.map()```.

# Setup
- ```Fork``` and ```clone``` this repository.
- ```cd``` into the project directory.
- Run ```npm install```.
- After ```npm install``` has finished run ```npm start```.

## Example

<img src="https://res.cloudinary.com/parmesanio/image/upload/v1542819036/Screen_Shot_2018-11-20_at_11.19.48_PM_s0uibi.png" />

# Step 1 - Create Components

## Summary

In ths step, we will be creating the ```Form``` and ```Product``` components inside the ```components``` directory.

## Instructions
- ```cd``` into the ```src``` folder.
- Create a new directory called ```components``` .
- Inside ```src/components```, create two more directories:
    - A Form directory .
    - A Product directory.
- Inside ```src/components/Form``` create a ```Form``` component. 
- Inside ```src/components/Product``` create a ```Product``` component.
- ```Import``` each component into ```App```.

# Step 2 - The Form Component

## Summary

In this step, we will setup the basic layout of the form.

## Instructions
- Open ```src/components/Form/Form.js```.
- Render three ```input``` elements and their respective ```label``` tags:
    - Product image URL
    - Product name
    - Product price
- Add a ```button``` tag with the text ```'Add Product'```.

That's it!  We have the initial setup for the ```Form``` component.  Lets move on to the ```App``` component and start setting up our initial state and methods.  We'll be passing these down to their respective components later.

# Step 3 - The App Component

## Summary
In this step, we will setup the initial state and methods our components will be using.

## Instructions
- Open ```src/App.js```.
- Setup initial state for our three inputs:
    - ```productURL```
    - ```productName```
    - ```productPrice```

We also need a way to store the products we create in state.
- Declare ```products``` in our state object and initialize it with an empty array.

Now that we have our initial state, we will be creating our method(s) used to capture what the user inputs.

- Start by declaring a function called handleURL.

- This function should take in one parameter.  We'll call it ```event```, but it's just a variable; it can be named anything.
- Using this ```event```, we'll update our ```productURL``` state from an empty string to the event target's value using ```this.setState({})```.
- Bind the function inside the constructor method.

Repeat these instructions and create methods for the remaining inputs.  Try to use different forms of binding.

## Step 3 - Black Diamond
Try to use one handle method instead of creating a separate method for each input.

# Step 4 - Passing Props to Form

## Summary
In this step, we will be passing our initial state and methods down to the ```Form``` component from ```App``` using ```props```.  You should have already imported the ```Form``` component into ```App```.

## Instructions
- Open ```src/App.js```.
- Start by rendering the ```Form``` component inside ```App```'s ```return```.
- Using the ```propName={prop}``` format, pass each method and state to the ```Form``` component.
    - Example: ```<Form productName={this.state.productName} />```

# Step 5 - Using props in Form

## Summary
In this step, we will be using the props passed from ```App``` for our input's ```value``` attribute and ```onChange``` method.

## Instructions
Lets begin by actually seeing what we've passed to ```Form```.
- Open ```src/components/Form/Form.js```.
- ```console.log(this.props)``` in between ```render()``` and ```return```.

Open up your browser and look at the console tab in your inspector.  The console should show a log of every prop you passed to ```Form``` in the previous step if done correctly.

Now that we see we have access to the correct props through ```this.props.propName```; we can use them.

- Set the ```value``` attribute of each input to their respective value from ```this.props```.
- Add the ```onChange``` event handler to each input and set the value to its respective method from ```this.props```.

You should now be able to type into each input and see a change.  If we have the ```console.log()``` from the beginning of this step's instructions, then you should see that log in your console tab firing everytime you type.

# Step 6 - Create Product Method

## Summary
In this step, we will declare and define a create product method in the ```App``` component, pass it down to ```Form``` via props, and use it in our button's ```onClick``` event handler.

## Instructions
- Open ```src/App.js```.
- Below our handle method(s), declare a method called ```createProduct```.
- This method should:
    - Create a copy of ```this.state.products```.
    - Declare and define a ```product``` object with ```name```, ```url```, and ```price``` keys.  These keys should have values matching their respective references to ```this.state```. 
    - Push ```product``` into the copied products array.
    - Set the state of ```products``` to the copied array.
- Pass this method down to ```Form``` and use it on our ```button```.

Add a ```console.log()``` after pushing the product to the copy array in order to check if your method works.

# Step 7 - The Product Component

## Summary
In this step, we will be rendering a  ```Product``` component for each ```product``` object in our ```products``` array in state.  You should have already imported the ```Product``` component in ```App```.

We will utilize the ```map``` function to accomplish this and store what we return in a variable called ```mappedProducts```.

## Instructions
- Open ```src/App.js```.
- Declare a variable called ```mappedProducts``` in between ```render()``` and ```return```.
- Set this variable equal to our mapped ```products``` array in state.
- Inside our map function, ```console.log()``` the value you passed in.
> *Note: It's common practice to name the value the singular version of what you are mapping through.  Here, we are mapping through ```products```, so we should call the value ```product```.*
- Inside ```App```'s ```return```, render our ```mappedProducts``` variable below the ```Form``` component.

Open up your browser, create a product, and view then console tab in your inspector.  If done correctly you should see an object being logged with the keys ```name```, ```url```, and ```price``` with their values being what you typed.

It's important to know where this log came from:

**Inside** your map function.

This means we have access to every object and its keys from our ```products``` array in our ```map``` and can return something for each one.

This something will be a ```Product``` component.

- Add a ```return``` in our ```map``` method.
- Return a ```Product``` component.
- Using the ```propName={prop}``` format, pass each key from the ```product``` object to the ```Product``` component.
    - Example: ```<Product name={product.name} />```.
- Open ```src/components/Product/Product.js```.
- Using what you've learned from using props in ```Form```, render the product's ```name```, ```url```, and ```price``` in ```Product``` components's return.

As you create more products you should see another Product component being rendered.

Congratulations!  You've created a component handling your form logic and a reuseable component handling your product logic.

# Black Diamond

Go back to your ```react-1-practice``` repo and, using what you've learned today, move the form to its own component and pass methods and state to it via props.
