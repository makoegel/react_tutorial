//named Import with curly braces
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
    let tabContent = 'Please click a button';

    function handleSelect(selectedButton) {
        /*selectedButton => 'components', 'jsx', 'props', 'state*/
        tabContent = selectedButton;
        console.log(selectedButton);
    }
    console.log('APP COMPONENT RENDERING');

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
            </main>
        </div>
    );
}

export default App;
