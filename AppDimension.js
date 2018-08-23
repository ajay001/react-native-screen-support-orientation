import React,{Component} from "react"
import {Dimensions} from "react-native"

/*
    Declare global variable for maintaining height, width and orientation of the screen
*/
let width = Dimensions.get("screen").width;
let height = Dimensions.get("screen").height ;
let orientation = (Dimensions.get("screen").width<Dimensions.get("screen").height)?"PORTRAIT":"LANDSCAPE"

class AppDimension extends React.Component
{
    /*
        Check the orientation of the screen and get the height and width of the screen according to its orientation .
     */
      static getDimension(callBack){
              Dimensions.addEventListener('change', () => {
                    width = Dimensions.get("screen").width
                    height = Dimensions.get("screen").height   
              })

            
              //  store the orientation, height and width in an object 
               
              var object={
                "height":parseInt(height, 10),
                "width":parseInt(width, 10),
                "orientation":orientation = (Dimensions.get("screen").width<Dimensions.get("screen").height)?"PORTRAIT":"LANDSCAPE"
              }                
              callBack(object);

      }
  
}

export default AppDimension
