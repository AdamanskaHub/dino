import React, { useMemo } from "react";
import { animated, useTransition } from "react-spring";

const Message = ({ message }) => {
    // console.log('message = '+message)
    const items = useMemo(
    () =>
        message.split("").map((letter, index) => ({
        item: letter,
        key: index
        })),
    [message]
    );
    const transitions = useTransition(items, item => item.key, {
    trail: 35,
    from: { display: "none" },
    enter: { display: "" }
    });
    return (
    <div className="DialogMessage">
        {transitions.map(({ item, props, key }) => {
        return (
            <animated.span key={key} style={props}>
            {item.item}
            </animated.span>
        );
        })}
    </div>
    );
    };

export default Message;