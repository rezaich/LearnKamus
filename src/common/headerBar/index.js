import React, { Fragment } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

const TextBold = Styled(Text)`
    font-family: SourceSansPro-Bold;
`;

function headerBar({
    goBack = false,
    title = "",
    navigation = {},
    headerRight = [],
    customHeader = null
}) {
    const size = 18;

    const onPressBackButton = () => navigation.goBack();

    return (
        <View style={styles.headerContainer}>
            <View style={[styles.headerWrapper, headerRight.length > 0 ? { justifyContent: 'space-between' } : {}]}>
                {customHeader ? (
                    customHeader
                ) : goBack ? (
                    <>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={onPressBackButton}>
                            <View style={styles.button}>
                                <Icon name="arrow-back" type="ionicon" size={size} color={AppTheme.colors.white} />
                            </View>
                            {title && (
                                <TextBold style={styles.title}>{title}</TextBold>
                            )}
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {headerRight.length > 0 && headerRight.map((el, idx) => (
                                el.name === "spinner" ? (
                                    <Fragment key={idx}>
                                        <ActivityIndicator size={el.size} color={el.color} />
                                    </Fragment>
                                ) : (
                                    <TouchableOpacity style={{ marginRight: idx === headerRight.length - 1 ? 0 : 15 }} onPress={el.onPress} key={idx}>
                                        <Icon name={el.name} type={el.type} size={el.size} color={AppTheme.colors.white} />
                                    </TouchableOpacity>
                                )
                            ))}
                        </View>
                    </>
                ) : title ? (
                    <>
                        <TextBold style={styles.title}>{title}</TextBold>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {headerRight.length > 0 && headerRight.map((el, idx) => (
                                el.name === "spinner" ? (
                                    el.loading && (
                                        <Fragment key={idx}>
                                            <ActivityIndicator size={el.size} color={el.color} />
                                        </Fragment>
                                    )
                                ) : (
                                    <TouchableOpacity style={{ marginRight: idx === headerRight.length - 1 ? 0 : 15 }} onPress={el.onPress} key={idx}>
                                        <Icon name={el.name} type={el.type} size={el.size} color={AppTheme.colors.white} />
                                    </TouchableOpacity>
                                )
                            ))}
                        </View>
                    </>
                ) : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#931A25',
        elevation: 5,
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 1,
        flex: 1,
    },
    headerWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    button: {
        marginRight: 15
    },
    title: {
        fontSize: 14,
        color: "#fff",
        textTransform: 'uppercase'
    },
});

export default headerBar;