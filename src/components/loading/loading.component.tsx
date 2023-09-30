import React from "react";
import { ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import { loadingComponentStyle } from "./loading.component.style";
import { LoadingState } from "./../store/loading/LoadingState";

interface LoadingComponentProps {
  loadingState: LoadingState;
}

const LoadingComponent = (props: LoadingComponentProps) => {
  
  return (
    props.loadingState.show ? 
    <View style={loadingComponentStyle.backdrop}>
      <ActivityIndicator animating={true} color={loadingComponentStyle.spinner.color} />
    </View>
    : null
  );

}

const mapStateToProps = (store: {loading: LoadingState}) : LoadingComponentProps => ({
  loadingState: store.loading
});

export default connect(mapStateToProps)(LoadingComponent);