import AgeCalculatorImage from '../../images/age-calculator.png'
import BmiCalculatorImage from '../../images/BMI-calculator.png'
import CalculatorImage from '../../images/Calculator.png'
import "./Home.css"

export default function Home (){
    return (
        <>
            <div className="home-page">

                <a href="/age-calculator">
                    <article className="home-article">
                        <div className="image-container">
                            <img src={AgeCalculatorImage} alt="age calculator" />
                        </div>
                        <div className="article-description">
                            <h2 className="article-name">Age Calculator</h2>
                        </div>
                    </article>
                </a>

                <a href="/bmi-calculator">
                    <article className="home-article">
                        <div className="image-container">
                            <img src={BmiCalculatorImage} alt="BMI calculator" />
                        </div>
                        <div className="article-description">
                            <h2 className="article-name">BMI Calculator</h2>
                        </div>
                    </article>
                </a>

                <a href="/calculator">
                    <article className="home-article">
                        <div className="image-container">
                            <img src={CalculatorImage} alt="Calculator" />
                        </div>
                        <div className="article-description">
                            <h2 className="article-name">Calculator</h2>
                        </div>
                    </article>
                </a>

                <a href="/currency-converter">
                    <article className="home-article">
                        <div className="image-container">
                            <img src={AgeCalculatorImage} alt="AgeCalculatorImage" />
                        </div>
                        <div className="article-description">
                            <h2 className="article-name">Currency Converter</h2>
                        </div>
                    </article>
                </a>

            </div>
        </>
    )
}