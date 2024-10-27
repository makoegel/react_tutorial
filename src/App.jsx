//react Hook (start with use, are called inside of react functions or other hooks)
import {useState} from 'react';
//named Import with curly braces
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import {EXAMPLES} from "./data-with-examples.js";
import ConditionalContent from "./components/TutorialExamples/ConditionalContent";

function App() {
    /*call Hook-Functions always on the top level of the function
    * counter:     current state,
    * setCounter:  updating function
    * (0):         initial value
    * const [counter, setCounter] = useState(0);
    * const is recreated every time it is used
    * */
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        /*selectedButton => 'components', 'jsx', 'props', 'state*/
        setSelectedTopic(selectedButton);
        // logs the old state
        console.log({selectedTopic});
    }

    console.log('APP COMPONENT RENDERING');

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic)
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                     <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        )

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept{...CORE_CONCEPTS[0]} />
                        <CoreConcept{...CORE_CONCEPTS[1]} />
                        <CoreConcept{...CORE_CONCEPTS[2]} />
                        <CoreConcept{...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id='examples'>
                    <h2>Examples</h2>
                    <menu>
                        {/*Component-Composition*/}
                        {/*anonymous function is executed when button is clicked*/}
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
                <section id={"conditionalContent"}>
                    <h2>Conditional Content</h2>
                    <ConditionalContent />
                </section>
            </main>
        </div>
    )
        ;
}

export default App;
