import React,{Component} from 'react';
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
            </div>
        )
    }
}


export default MergeVis