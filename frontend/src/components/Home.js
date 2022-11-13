import React, {Component} from 'react';
import lightbulb from "./../assets/rsz_1lightbulb.png";


class Home extends Component {
    render() {
        const StyleHome = {
            height: "800px",
            backgroundImage: `url(${lightbulb})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            marginInline: "60px" ,
            fontFamily: "Copperplate Gothic"
        };
        return (
            <div style={StyleHome}>
                <h1 style={{padding: "40px"}}>WELCOME</h1>
                <h2 style={{marginLeft:"40%", paddingTop: "80px"}}>Donec eget dolor tincidunt, condimentum.</h2>
                <p style={{marginLeft: "40%", marginRight: "20px"}}>Donec nisi tortor, hendrerit ut ullamcorper eget, vestibulum non neque. Curabitur id ante mattis, porta purus feugiat, mattis dolor. Nam laoreet vitae libero non maximus. Cras ultricies ante arcu, vel volutpat eros molestie eget. Donec in dolor posuere, pulvinar purus pharetra, rutrum nisl. Pellentesque sit amet imperdiet augue, eu imperdiet dui. Vestibulum nec dignissim dui, nec ultricies libero.</p>
                <h2 style={{marginLeft:"40%", paddingTop: "80px"}}>Cras ultricies ante arcu</h2>
                <p style={{marginLeft: "40%", marginRight: "20px"}}>Nulla vitae ligula tempor, facilisis nisi hendrerit, dapibus mauris. In commodo iaculis mauris, sit amet porta lectus lacinia quis. Curabitur sed metus turpis. Mauris eu ullamcorper lorem, nec varius massa. Donec et ante a risus ultrices condimentum non sit amet ligula. Quisque dignissim elementum ipsum, vel maximus purus maximus sed. Donec justo metus, tristique non erat mollis, efficitur commodo magna. Donec est leo, tempor sed lacus placerat, ultricies consectetur diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent elementum sem dolor. Cras semper, nisl porta auctor ultricies, nunc nulla semper felis, ut ornare purus est vitae odio. In vitae pulvinar ipsum, et bibendum urna. Donec pretium ullamcorper eros, eget feugiat diam sagittis non. Praesent eget lacinia risus. Aliquam nec placerat augue, sed vulputate libero.</p>
            </div>
        );
    }
}

export default Home;