import React,{Component} from 'react';
import {getMergeAnimations} from '../../utilities/mergeAnimation'
import "./style.css";

const animationSpeedMS: number = 1;

const numBars: number = 310;

const mainBarColor: string = "yellowgreen";

const compareColor: string = '';

interface IProps {

}

interface IState {
    array: number[]
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
        const animations: number[]|object[] = getMergeAnimations(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array.bar');
            const isColorChange:boolean = i % 3 !==2;
            if(isColorChange) {
                const [barOneInd, barTwoIdx] =animations[i];
                const barOneStyle = arrayBars[barOneInd].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                const color = i % 3 === 0 ? compareColor : mainBarColor;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationSpeedMS);
            }
            else{
                setTimeout(()=>{
                    const [barOneInd, newHeight] =animations[i];
                    const barOneStyle = arrayBars[barOneInd].style;
                    barOneStyle.height = `${newHeight}px`;
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