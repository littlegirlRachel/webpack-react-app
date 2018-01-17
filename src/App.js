import React from 'react';
// import ReactDOM from 'react-dom';

//获取图片相关数据！
let imageDatas = require('./data/imageDatas.json');

//利用自执行函数,将图片名信息转成图片URL路径信息
//将图片名转换成图片路径
imageDatas = (function (imageDataArr) {
    for (let i = 0; i < imageDataArr.length; i++) {
        let singeImageData = imageDataArr[i];
        singeImageData.imageUrl = require('./images/' + singeImageData.fileName);
        imageDataArr[i] = singeImageData;
    }
    return imageDataArr;
})(imageDatas);
// /*
//  * 获取区间内的一个随机值
//  */
// function getRangeRandom(low, high) {
//     return Math.floor(Math.random() * (high - low) + low);
// }

/*
 * 获取 0~30° 之间的一个任意正负值
 */
// function get30DegRandom() {
//     return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30));
// }
class ImgFigure extends React.Component {
    render() {
        return (
            <figure>
                <img src={this.props.data.imageUrl} alt=""/>
                <figcaption>
                    <h2 className="img-title">111</h2>
                    <div className="img-back">
                        <p>
                            333
                        </p>
                    </div>
                </figcaption>
            </figure>
        );

    }
}

class App extends React.Component {
    render() {
        return (
       <section className="stage">
           <section className="img-sec"></section>
           <nav className="controller-nav"></nav>
       </section>
        )
    }
}

// class ControllerUnit extends React.Component {
//     /*
//      * imgFigure的点击处理函数
//      */
//     handleClick = (e) => {
//         if (this.props.arrange.isCenter) {
//             this.props.inverse();
//         } else {
//             this.props.center();
//         }
//         e.stopPropagation();
//         e.preventDefault();
//     }
//
// }
//控制组件

// class ControllerUnit extends React.Component {
// }
// class AppComponent extends React.Component {
//
//
//     /*
//      * 翻转图片
//      * @param index 传入当前被执行inverse操作的图片对应的图片信息数组的index值
//      * @returns {Function} 这是一个闭包函数, 其内return一个真正待被执行的函数
//      */
//
//
//
//
//
//     /*
//      * 利用arrange函数， 居中对应index的图片
//      * @param index, 需要被居中的图片对应的图片信息数组的index值
//      * @returns {Function}
//      */
//
//
//
//
//     // 组件加载以后， 为每张图片计算其位置的范围
//
//
//     render(){}
// }
//
// AppComponent.defaultProps = {
// };

export default App;
