import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, TextInputProps, StyleSheet } from 'react-native';

interface Props extends TextInputProps {
  value:any,
  label:string,
  iconSource?:any,
  extra?: React.StatelessComponent,

  labelColor:string,
  inputColor:string,
  placeholderTextColor:string,
  closeBackgroundColor:string,
  closeTextColor:string,

  onChangeText: (value:any) => string
}

export default class InputItem extends Component<Props> {

  static defaultProps = {
    labelColor: '#fff',
    inputColor: '#fff',
    placeholderTextColor: '#fff',
    closeBackgroundColor: '#fff',
    closeTextColor: '#000',
  }

  state = {
    showClose: false,
  };

  renderClose = () => {
    if(!this.state.showClose) return null
    const {
      closeBackgroundColor,
      closeTextColor
    } = this.props
    return (
      <TouchableOpacity
        style={[styles.closeView, {backgroundColor: closeBackgroundColor}]}
        onPress={() => this.props.onChangeText('')}
      >
        <Text style={[styles.closeText, {color: closeTextColor}]}>X</Text>
      </TouchableOpacity>
    )
  }

  hideClose() {
    this.setState({
      showClose: false
    })
  }

  showClose() {
    if(this.props.value !== '') {
      this.setState({
        showClose: true
      })
    }
  }

  handleChangeText = (text) => {
    if(!this.state.showClose && text !== '') {
      this.showClose()
    }
    this.props.onChangeText(text)
  }

  render() {
    const {
      value,
      label,
      placeholder,
      iconSource,
      extra,
      labelColor,
      inputColor,
      placeholderTextColor,
      closeBackgroundColor,
      closeTextColor,
      style,
      ...rest
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Image source={iconSource} style={styles.imageView} resizeMode="center" />
        <Text style={[styles.labelText, {color: labelColor}]}>{label}</Text>
        <TextInput
          underlineColorAndroid={'transparent'}
          style={[styles.textInputText, {color: inputColor}]}
          ref='TextInput'
          {...rest}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onBlur={this.hideClose}
          onFocus={this.showClose}
          onChangeText={this.handleChangeText}
          value={value}
        />
        {this.renderClose()}
        {extra}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    height: 28
  },
  textInputText: {
    height: 20,
    flex: 1,
  },
  imageView: {
    width: 10,
    height: 10,
    marginRight: 7
  },
  labelText: {
    width: 42,
    fontSize: 8
  },
  closeView: {
    width: 8,
    height: 8,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4,
    borderRadius: 8,
    backgroundColor: '#000',
  },
  closeText: {
    fontSize: 4, 
    textAlign: 'center'
  }
})
