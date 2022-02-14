import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AOS from 'aos'
// import './mouseEffect'
// @ts-ignore



const useStyles = makeStyles(() => ({
    cursorBG: {
        zIndex: "-10",
        position: "fixed",
        left: "0",
        top: "0",
        pointerEvents: "none",
        willChange: "transform",
    },
    cursorInner: {
        width: "226px",
        height: "226px",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 4.39%, rgba(0, 0, 0, 0.539617) 61.02%, #000000 100%), linear-gradient(268.84deg, #40FF00 -7.46%, #16FFA8 49.66%, #00FFFF 110.11%)",
        '@media (max-width: 899px)': {
            width: "120px",
            height: "120px",
        },
    }
}));

export function DarkBg(props) {

    useEffect(() => {
        AOS.init();
        const cursor = window.document.querySelector('#cursor');
        let mouse = { x: 300, y: 300 };
        let pos = { x: 0, y: 0 };
        const speed = 0.1; // between 0 and 1
        const updatePosition = () => {
            pos.x += (mouse.x - pos.x) * speed;
            pos.y += (mouse.y - pos.y) * speed;
            cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
        };
        const updateCoordinates = e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }
        window.addEventListener('mousemove', updateCoordinates);
        function loop() {
            updatePosition();
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
    }, [])

    const classes = useStyles();
    const { titleText, children } = props;
    const particleParams = require("./config.json");
    return (
        <div id="cursor" className={classes.cursorBG}>
            <div className={classes.cursorInner}></div>
        </div>
    );
}
