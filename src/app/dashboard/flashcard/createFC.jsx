import './createFC.css';
import { doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import { System } from '../../../firebase/config';
import Header from '../../common/nav';

// add register with google account

let system = new System();
let state = true

let uid = localStorage.getItem('flash-card-uid')

function CreateFC() {
    window.onload = function () {
        if (state) {

            const button = document.getElementById('execute')

            const ref = doc(system.db, 'users', uid)


            button.addEventListener('click', () => {
                const front = document.querySelector('#card-front textarea').value
                const back = document.querySelector('#card-behind textarea').value

                const group = document.getElementById('card-group').value
                const card = { front: front, back: back }

                console.log(uid)
                console.log(front, back)

                const field = getDoc(ref).then((doc) => {
                    const data = doc.data()
                    const flashcards = data.flashcards

                    if (flashcards[group] == null) {
                        flashcards[group] = []
                    }
                    flashcards[group].push(card)

                    updateDoc(ref, {
                        flashcards
                    }).then(() => {
                        console.log('success - added in db')
                    }).catch((error) => {
                        console.log(error)
                    })
                })
            })
        }
    }

    return (
        <div id="create-fc">
            <Header />
            <div className='wrapper'>
                <div className='onelastchance'>
                    <div className='boo'>
                        <div className='cum'>create a flashcard.</div>
                        <img className="soSilly" src="./020.png"></img>
                    </div>
                    <div className='dumb'>
                        <input className='sleepingJames' type="text" placeholder='create a folder' id="card-group" />
                        <div className='dawg'>
                            <div className='card' id='card-front'>
                                <textarea className="sad" type="text" />
                            </div>
                            <div className='card' id='card-behind'>
                                <textarea className="sad" type="text" />
                            </div>
                        </div>
                        <button className="pov" id='execute'>create!</button>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default CreateFC;
