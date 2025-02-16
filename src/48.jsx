import tortoise from './assets/48tortoise.jpg';

function Fortune48() {
    return (
        <div className='wrapper'>
            <img src={tortoise} alt='Photo of a tortoise' width='500px' height='500px'/>

            <div className='fortune'>
                <h2>2048 <br/> Year of the Tortoise</h2>
                <p>
                    <i>A patient heart outlasts the fiercest storm.</i> <br/> <br/>
                    I’m able to slow down and retire because of the financial investments and savings I’ve been able to make at earlier stages of my career. I spend my time traveling, making art, exploring nature, and getting to see everything the world has to offer. I’m a philanthropist and my spare time is spent mentoring young people who I’ve connected with over the years through my nonprofit and tech career. I help them with career guidance and keep them feeling hopeful about their futures. I visit the friends I have made all around the world. I stay active by swimming, hiking, doing yoga, and staying in touch with all my mentees.

                </p>
            </div>
        
        </div>
    )


}

export default Fortune48