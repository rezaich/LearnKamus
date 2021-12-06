import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ScrollView, RefreshControl } from 'react-native';

function container({
    statusBarColor = '#000',
    translucent = false,
    animated = true,
    children = <></>,
    goBack = false,
    title = "",
    navigation = {},
    headerRight = [],
    customHeader = null,
    loading = false,
    onRefresh = () => { },
    isRefresh = false
}) {
    const progressViewOffset = 50;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={animated} barStyle="light-content" backgroundColor={statusBarColor} translucent={translucent} />
            <HeaderBar goBack={goBack} navigation={navigation} title={title ? title : false} headerRight={headerRight} customHeader={customHeader} />
            {isRefresh ? (
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView} refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} progressViewOffset={progressViewOffset} />}>
                    {children}
                </ScrollView>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
                    {children}
                </ScrollView>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#900'
    },
    scrollView: {
        flexGrow: 1,
        backgroundColor: '#900',
        paddingTop: 50
    }
});

export default container;