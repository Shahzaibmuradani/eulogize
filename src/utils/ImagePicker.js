import * as ImagePicker from 'react-native-image-picker';
export default (callback)=>{
    let options = {
        title: 'Select Image',
        customButtons: [
          { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
            callback(null)
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            callback(null)
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            callback(null)
        } else {
            callback(response)
        }
    });
}