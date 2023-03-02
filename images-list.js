window[sharedNames.images] = [

    /// ALENA_K

    {
        src: './images/collages/alena_k/1.png',
        html: `<span style="position: absolute;top: 24%;right: 5%;font-weight: 800;font-size: 21px;">TASTE IT </span>
        <span style="
            left: 43%;
            position: absolute;
            top: 40%;
            text-align: center;
            font-size: 13px;
        ">sandwiches<br>
                pork belly<br>
                pork ribs<br>
                lemon roll<br>
                chimichuri sauce<br>
                hot croutons<br>
                chili pepper<br>
                onion<br>
                red sweet pepper<br>
                white beans<br>
                vegetable oil with garlic<br>
                pork chorizo<br>
                corn</span>
        <span style="
        left: 10%;
        position: absolute;
        top: 56%;
        text-align: center;
        font-size: 13px;
    ">
    poppy seed roll<br>
    garlic<br>
    water<br>
    carrot<br>
    </span>`
    },
    {
        src: './images/collages/alena_k/2.png',
        text: `REACH THE POINT
        If something somewhere has departed, it means something somewhere has arrived.
        And this place is suddenly below the back.
        `
    },
    {
        src: './images/collages/alena_k/3.png',
        text: `Your faucet is dripping?
        psychologist is needed
       heart will say thank you
       `
    },
    {
        src: './images/collages/alena_k/4.png',
        text: `BADAN.

        WHO KNOWS, WHAT HE IS DIGGING FOR.
        `
    },
    {
        src: './images/collages/alena_k/5.png',
        text: `Don't freeze up!

        bless you
        `
    },
    {
        src: './images/collages/alena_k/6.png',
        text: `Hey, listen up!
        When, if not now?
        `
    },
    {
        src: './images/collages/alena_k/7.png',
        text: `Remember:
        BUTTERFLIES DESIGNERS
        IN SOCIAL MEDIA
        
        ISN'T THIS ENOUGH?
        `
    },
    {
        src: './images/collages/alena_k/8.png',
        text: `Don't stress yourself!
        Danger is gone
        JUST CLICK
        
        no risks: company guarantees a result or a refund
        
        You qualify:
        good health
         28 to 55 years old
        height ideally up to 180 cm
        BMI 18,5 to 30
        higher education
        knowledge of english in russian on everyday level
        `
    },
    {
        src: './images/collages/alena_k/9.png',
        text: `ARCHIPELAGO
        OF BEAUTY?
        
        INEXPLICABLY, ALL BUSHES AND TREES
        «PRESS THEIR FEET ON YOURS», 
        BUT THEY ARE DEFINITELY 
        «NOT YOUR SPECIES»
        
        KERAMOS.
        `
    },
    {
        src: './images/collages/alena_k/10.png',
        text: `HUNT FOR

        YOUR HEALTH
        
        help yourself and those who are near
        `
    },
    {
        src: './images/collages/alena_k/20230203-153659.png',
        text: `SECRET OF LIFE

        a pill to the house
        help of a mirror
        `
    },
    {
        src: './images/collages/alena_k/20230203-1536592.png',
        text: `NOW, JUST LIKE EVERYONE ELSE,
        I HAVE 
       BUBBLES 
       INSTEAD
       OF FRUITS
       `
    },

    /// MASHA

    {
        src: './images/collages/masha/2.jpg',
        text: `Institute of Parasitology

        WHY WOULD YOU DE-CHIMERIZE A MUTANT
        `
    },
    {
        src: './images/collages/masha/2.jpg',
        text: `Institute of Parasitology

        WHY WOULD YOU DE-CHIMERIZE A MUTANT
        `
    },
    {
        src: './images/collages/masha/3.jpg',
        text: `the right moment 
        WILL BE FLEETING
        the big utopia
        happens much less often`
    },
    {
        src: './images/collages/masha/4.jpg',
        text: `strong pains.
        nothing surprising
       `
    },
    {
        src: './images/collages/masha/5.png',
        text: `morning. august - september

        are you drifting?
`
    },
    {
        src: './images/collages/masha/6.png',
        text: `Twenty years - like one summer 
        who am I?
        `
    },
    {
        src: './images/collages/masha/7.png',
        text: `SHPRYADBOAG`
    },
    {
        src: './images/collages/masha/8.png',
        text: `all day
        you are silent
         / we only live once
        every word is ending
        `
    },
    {
        src: './images/collages/masha/9.png',
        text: `key word:
        hooch
        `
    },
    {
        src: './images/collages/masha/10.png',
        text: `get housing, open a maternity home, return prizes`
    },
].map(item => ({
    image: item.src,
    html: item.html || '<span style="position: absolute; top: 30%; left: 50%; transform: translateX(-50%);">' + item.text.trim().split('\n').join('<br>') + '</span>'
}))