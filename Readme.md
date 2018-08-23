## React Native Method to get current Screen Orientation with its Height and Width in IOS and Android
<img width="274px" align="right" src="https://github.com/ajay001/react-native-screen-support-orientation/blob/master/DynamicOrientation.gif?raw=true" />

A react-native component for getting orientation of the screen and height, width of the screen according to its orientation .   



### Installation

```
  npm i react-native-screen-support-orientation --save

```


### Usage

```javascript
import AppDimension from 'react-native-screen-support-orientation'
```
### Method to get the current Orientation, Width and Height of the screen. 
```
        
            AppDimension.getDimension((callback)=>{
                
                alert(JSON.stringify(callback))
                /** this.setState({height:callback.height,width:callback.width,orientation:callback.orientation})
                **/
            })
    
  
```  
  
 
### Callback arguments

| Prop                              | Type          | Description                                                                              |
|-----------------------------------|-------------|------------------------------------------------------------------------------------------------------------|
|`orientation`                      |`String`       |Give the orientation of the screen (PORTRAIT or LANDSCAPE) .                                                                     
|`width`                       |`Number`       |Give the width of the screen according to the screen orientation .                                                                    
|`height`                       |`Number`        |Give the height of the screen according to the screen orientation .  



