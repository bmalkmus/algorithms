import React,{Component} from 'react';
import {getMergeAnimations} from '../../utilities/mergeAnimation'
import "./style.css";

const animationSpeedMS: number = 1;

const numBars: number = 310;

const mainBarColor: string = "yellowgreen";

const compareColor: string = 'red';

interface IProps {

}

interface IState {
    array: number[]
}

interface Tuple {
    [index: number]: number;
  } 

function randomIntRange(min:number, max:number){
    return Math.floor(Math.random() * (max-min+1)+min)
}

class MergeVis extends Component <IProps, IState>{
    constructor(props: IProps){
        super(props);

        this.state = {
            array: [],
        }
    }

    componentDidMount(){
        this.resetArray()
    }

    resetArray(){
        const array:number[] = [];
        for (let i:number = 0; i < numBars; i++){
            array.push(randomIntRange(5, 600))
        }
        this.setState({array})
    }

    mergeSort(){
        const animations = getMergeAnimations(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const curAnimation = Object.values(animations[i])


            const isColorChange:boolean = i % 3 !==2;
            if(isColorChange) {
                const [barOneInd,barTwoIdx] =[curAnimation[0],curAnimation[1]];
                const barOneStyle = arrayBars[barOneInd]
                const barTwoStyle = arrayBars[barTwoIdx]

                const color = i % 3 === 0 ? compareColor : mainBarColor;
                setTimeout(()=>{
                    console.log(barOneStyle)
                    barOneStyle.setAttribute("style", `background-color:${color};`)
                    barTwoStyle.setAttribute("style", `background-color:${color};`)
                }, i * animationSpeedMS);
            }
            else{
                setTimeout(()=>{
                    const [barOneInd, newHeight] =[curAnimation[0],curAnimation[1]];
                    const barOneStyle = arrayBars[barOneInd]
                    barOneStyle.setAttribute("style", `height:${newHeight}px;`)
                }, i * animationSpeedMS);
            }
        }
    }

    render(){
        const {array} = this.state

        return(
            <div>
            <div className = "array-container">
                {array.map((value:number, ind:number)=>(
                    <div 
                        className="array-bar" 
                        key={ind}
                        style = {{
                            backgroundColor: mainBarColor,
                            height: `${value}px`
                        }}
                    ></div>
                ))}
                </div>
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
            </div>
        )
    }
}


export default MergeVis