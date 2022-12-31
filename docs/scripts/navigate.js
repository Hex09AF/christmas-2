const _navs = document.getElementsByClassName("nav-frame");
const _body = document.getElementById("root");

const _EVENTS = {
    CHRISTMAS: "christmas",
    NEW_YEAR: "new-year"
};
const _eventsAr = [_EVENTS.CHRISTMAS, _EVENTS.NEW_YEAR];

let _curEvent = _EVENTS.CHRISTMAS;

const toggleEvent = (newEvent) => {
    _body.classList.toggle(_curEvent);
    _body.classList.toggle(newEvent);
    _curEvent = newEvent
}

[..._navs].forEach((nav, idx) => {
    nav.addEventListener("click", (e) => {
        e.preventDefault();
        toggleEvent(_eventsAr[idx]);
    })
})
