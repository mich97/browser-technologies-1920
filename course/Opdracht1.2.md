# Opdracht 1.2 - Fork je OBA
Hoe zit het eigenlijk met Progressive Enhancement van je OBA opdracht? Waarschijnlijk kan daar wel het één en ander aan verbeterd worden, dat ding is immers in een week in elkaar gehackt!

## Features
### Afbeeldingen uitzetten
Bij het uitzetten van de afbeeldingen laat de web-app zoals verwacht alleen de alt attribuut tekst zien en de bijbehorende titels van comics.

### Custom fonts uitzetten
Omdat er gebruik wordt gemaakt van Google Fonts is er geen verandering in de web-app na het uitzetten van custom fonts.

### Kleur uitzetten & kleurenblindheid instellen
Voor het uitzetten van kleur en instellen van kleurenblindheid is de WCAG Color Contrast Checker extensie gebruikt. Omdat kleuren geen grote rol spelen in de functionaliteit van de web-app werkt alles nog prima zonder kleur. Ook bij het instellen van verschillende soorten kleurenblindheid is er alleen een groot verschil bij de afbeeldingen, wat niet belangrijk is.

### Muis/Trackpad werkt niet
De web-app kan nog steeds goed gebruikt worden zonder het gebruik van een muis/trackpad. Met gebruik van tab kan naar elke comic worden genavigeerd. Dit geldt ook voor de terug knop op de detailpagina’s.

### Breedband internet uitzetten
Met een trage internetverbinding doet de web-app het nog steeds prima. Het duurt als verwacht langer om records uit de API op te halen waardoor de gebruiker iets langer naar de loading states moet kijken.

### Javascript uitzetten
Na het uitzetten van de javascript is de web-app niet meer functioneel. Het loopt vast bij het laten zien van de loading states waarna er niks wordt ingeladen.

### Cookies niet accepteren
Omdat er geen gebruik wordt gemaakt van cookies is er geen verandering in de web-app.

### Local storage niet accepteren
Omdat er geen gebruik wordt gemaakt van local storage is er geen verandering in de web-app.

## Device Lab
### Apple iPad Air 2
**Mozilla/5.0 (iPad; CPU OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1**<br>
De web-app kan gebruikt worden zoals het hoort en er zijn geen fouten gevonden.

### iPod 4
**Mozilla/5.0 (iPod; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A523 Safari/8536.25**<br>
Het lijkt erop dat de javascript niet werkt waardoor er niks uit de API wordt opgehaald. Ook bepaalde css properties zoals background-color en animaties met keyframes die doen het niet.

### Revolution
**Mozilla/5.0 (Linux; Android 4.4.4; revolution Build/KTU84Q)AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome 33.0.0.0 Mobile Safari/537.35**<br>
Het lijkt erop dat de javascript niet werkt waardoor er niks uit de API wordt opgehaald. Ook bepaalde css properties zoals background-color en animaties met keyframes die doen het niet.

**Mozilla/5.0 (Linux; Android 4.4.4; revolution Build/KTU84Q)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.112 Chrome 33.0.0.0 Mobile Safari/537.35**<br>
De web-app kan gebruikt worden zoals het hoort en er zijn geen fouten gevonden.

## Screenreader
Voor het oplezen van de web-app is er gebruik gemaakt van [Talkify](https://talkify.net/text-to-speech).

## Overview
De overview pagina wordt gelezen netjes gelezen. Maar omdat elke comic eindigt met een nummer, is er een pauze net voor het lezen van het nummer waardoor het lijkt alsof het nummer van de comic bij de volgende opgelezen comic hoort.

## Detailpagina
Omdat het niet mogelijk is in de web-app om direct naar een pagina te gaan via een id in de link is het ook niet mogelijk voor talkify om de pagina te lezen.
