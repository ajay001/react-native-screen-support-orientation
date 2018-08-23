## React Native Method to get current Screen Orientation with its Height and Width in IOS and Android
<img width="274px" align="right" src="https://raw.githubusercontent.com/ajay001/react-native-androidcustom-datetimepicker/master/datetimePicker.gif" />

A react-native component for getting orientation of the screen and height, width of the screen according to its orientation .   



### Installation

```
  npm install react-native-androidcustom-datetimepicker --save
  react-native link react-native-androidcustom-datetimepicker

```


### Usage

```javascript
import DateTimePickerModule from 'react-native-androidcustom-datetimepicker'
```
### Method to get the current Orientation, Width and Height of the screen. 
```
        
            AppDimension.getDimension((callback)=>{
                /**this.setState({height:callback.height,width:callback.width,orientation                   :callback.orientation})**/
                alert(JSON.stringify(callback))
                /**callback return an object => {"height":736,"width:"414",orientation:"PORTRAIT"}**/
            })
    
  
```  
  
 
### Callback arguments

| Prop                              | Type          | Description                                                                              |
|-----------------------------------|-------------|------------------------------------------------------------------------------------------------------------|
|`orientation`                      |`String`       |'Give the orientation of the screen (PORTRAIT or LANDSCAPE)' .                                                                     
|`width`                       |`Number`       |'Give the width of the screen according to the screen orientation' .                                                                    
|`height`                       |`Number`        |'Give the height of the screen according to the screen orientation' .  



