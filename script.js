let progress = 50
let startX = 0
let active = 0
let isDown = false

/*--------------------
Contants
--------------------*/
const speedWheel = 0.02
const speedDrag = -0.1

/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

/*--------------------
Items
--------------------*/
const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
    const zIndex = getZindex([...$items], active)[index]
    item.style.setProperty('--zIndex', zIndex)
    item.style.setProperty('--active', (index - active) / $items.length)
}

/*--------------------
Animate
--------------------*/
const animate = () => {
    progress = Math.max(0, Math.min(progress, 100))
    active = Math.floor(progress / 100 * ($items.length - 1))

    $items.forEach((item, index) => displayItems(item, index, active))
}
animate()

/*--------------------
Click on Items
--------------------*/
$items.forEach((item, i) => {
    item.addEventListener('click', () => {
        progress = (i / $items.length) * 100 + 10
        animate()
    })
})

/*--------------------
Handlers
--------------------*/
const handleWheel = e => {
    const wheelProgress = e.deltaY * speedWheel
    progress = progress + wheelProgress
    animate()
}

const handleMouseMove = (e) => {
    if (e.type === 'mousemove') {
        $cursors.forEach(($cursor) => {
            $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        })
    }
    if (!isDown) return
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const mouseProgress = (x - startX) * speedDrag
    progress = progress + mouseProgress
    startX = x
    animate()
}

const handleMouseDown = e => {
    isDown = true
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
    isDown = false
}

document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)

AOS.init();
gsap.registerPlugin(ScrollTrigger);

let direction = 1;

const roll1 = roll(".rollingText", {
        duration: 30
    }),
    roll2 = roll(".rollingText02", {
        duration: 30
    }, true),
    scroll = ScrollTrigger.create({
        onUpdate(self) {
            if (self.direction !== direction) {
                direction *= -1;
                gsap.to([roll1, roll2], {
                    timeScale: direction,
                    overwrite: true
                });
            }
        }
    });

function roll(targets, vars, reverse) {
    const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 100);
        }
    });
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    gsap.utils.toArray(targets).forEach(el => {
        let clone = el.cloneNode(true);
        el.parentNode.appendChild(clone);
        gsap.set(clone, {
            position: "absolute",
            top: el.offsetTop,
            left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)
        });
        tl.to([el, clone], {
            xPercent: reverse ? 100 : -100,
            ...vars
        }, 0);
    });
    return tl;
}

gsap.registerPlugin(TextPlugin);
gsap.from(".evermore-text", {
    duration: 1.3,
    text: "",
    delay: 0.5,
});

var textAnimation = gsap.timeline({
        onComplete: () => {
            SplitGreat.revert();
        },
    }),
    SplitGreat = new SplitText(".navbar, .evermore-swift, .evermore-9th", {
        type: "words, chars",
    }),
    chars = SplitGreat.chars;

textAnimation.from(
    chars, {
        duration: 0.5,
        opacity: 0,
        y: 10,
        ease: "circ.out",
        stagger: 0.02,
    },
    "+=0"
);

const onPlay = () => {
    console.log('onplay')
    const audio = new Audio('https://www.youtube.com/watch?v=Qy8g5_OfrI8');
    audio.play();
}

const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});