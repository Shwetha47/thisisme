import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Technologies() {
    const [valueTechnologies, setValueTechnologies] = useLocalStorage(
        'technologiesValueStored'
    );
    const valueChangeTechnologies = event => setValueTechnologies(event.target.value);

    const imgHeight = (valueTechnologies === '') ? 26 : 82;

    /*const location = useLocation();
    const currentPath = location.pathname;
    const technologiesPositionByLocation = (currentPath == '/s/technologies') ? "0.5" : "50";*/

    const svgImageTechnologies = (
        <g>
            <rect x="0.5" y="0.5" width="494" height={imgHeight - 1} rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            {valueTechnologies !== '' && (
                <text x="25" y="36">
                    <tspan x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Technologies I use</tspan>
                    <tspan x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueTechnologies}</tspan>
                </text>
            )}
        </g>
    );

    const svgImageTechnologiesString = renderToString(svgImageTechnologies)
    localStorage.setItem('svgImageTechnologiesStored', svgImageTechnologiesString)

    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <div id="form-wrapper">
                            <form>
                                <div>
                                    <label htmlFor="technologies">Technologies I use <span>(comma separated)</span></label><br/>
                                    <input onChange={valueChangeTechnologies} value={valueTechnologies} type="text" id="technologies" name="technologies" minLength="0" maxLength="50"/>
                                </div>
                            </form>
                        </div>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> comma separated example: Visual Studio Code, React, ...<br/><span>*</span> for information about data, see <Link to="/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div>
                    <svg width="495" height={imgHeight} viewBox={`0 0 495 ${imgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        {svgImageTechnologies}
                    </svg>
                    <p id="preview-text">preview <span>- you can edit the layout in the <Link to="/s/result" exact>Result</Link> section.</span></p>
                </div>
            </div>
        </>
    );
}

export default Technologies;