const SContainer = (props) => {
    StatusBar.setBackgroundColor('#FFFFFF');
    return (
        <SafeAreaView style={{flex: 1}}>
            <_Container>
                {props.children}
            </_Container>
        </SafeAreaView>
    );
};