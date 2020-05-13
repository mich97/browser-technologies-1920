# BT1920 | WebSurv
![Thumbnail](./course/thumbnail.png)

## Live Demo
[Link](https://bt-michel.herokuapp.com/)

## Use Case
Ik wil een enquete kunnen invullen over de minor Web Development, met verschillende antwoord mogelijkheden. Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.
- [Opdracht 1.1](./course/Opdracht1.1.md)
- [Opdracht 1.2](./course/Opdracht1.2.md)
- [Opdracht 2](./course/Opdracht2.md)
    - [Layers](./course/Layers.md)
    - [Feature tests](./course/Featuretests.md)
    - [Feature detection](./course/Featuredetection.md)

## Installeren
1. Clone repo
    ```
    $ git clone https://github.com/mich97/browser-technologies-1920.git
    ```
2. Move to directory
    ```
    $ cd browser-technologies-1920
    ```
3. Install dependencies
    ```
    $ npm install
    ``` 
4. Run
    ```
    $ npm run start
    ```
5. Open following url in browser
    ```
   localhost:3000
   ```
   
## Conclusie
In mijn conclusie ga ik in op alle leerdoelen van het vak en hoe ik dit heb behaald.

### Student kan de core functionaliteit van een use case doorgronden
In het begin had ik een beetje moeite met het bouwen van de core functionaliteit, omdat ik erg zat met het concepten van het project. Uiteindelijk is dit prima gelukt en heb ik een enquête die het prima doet op elke geteste browser.

### Toegankelijkheid: De user experience is goed
Ik heb er goed voor gezorgd in de verschillende lagen dat de user experience steeds wat beter word. De core in de 1e, styling in de 2e laag en uiteindelijk uitbreiding met javascript in de 3e laag om de user experience te optimaliseren.

### Readme: In de beschrijving van het project staat een probleemdefinitie, hoe het probleem is opgelost en een uitleg van de code.
Ik heb een apart artikel geschreven over mijn [Feature Detection](./course/Featuredetection.md). Hierin staat gedocumenteerd hoe ik Javascript heb gebruikt voor een bepaalde feature en hoe ik een fallback ervoor heb geschreven, omdat de functie niet in elke browser ondersteuning heeft.

### Student kan uitleggen wat Progressive enhancement is.
Progressive Enhancement is dat je de code in 3 lagen schrijft. Je begint met de html, zonder styling en zorgt ervoor dat de core functionaliteit het doet. In de 2e laag kan je door met het schrijven van css zodat de gebruiker niet naar een kale website hoeft te kijken. En in de 3e laag schrijf je met javascript de 'nice to haves' om de user experience nogmaals te verbeteren.

Progressive Enhancement heeft mij vooral geleerd om een stuk meer gestructureerd te werken en niet af te dwalen van de core functie.

### Student laat zien hoe Progressive Enhancement toe te passen in Web Development
Ik was in het begin eigenlijk op de verkeerde manier begonnen door niet bij de 1e laag te beginnnen. Dit heb ik later wel gelukkig opgemerkt en uiteindelijk heb ik de 3 lagen goed opgedeeld in mijn code. Hier is meer over te lezen in [Layers](./course/Layers.md).

### Student kan uitleggen wat Feature detection is.
Feature Detection is het checken van een bepaalde functionaliteit om te kijken of er ondersteuning voor is in een bepaalde browser. Vervolgens wil je hiervoor uiteraard een fallback schrijven voor wanneer er geen ondersteuning is zodat de browser alsnog ergens terug op kan vallen.

### Student laat zien hoe Feature Detection kan worden toegepast in Web Development
Hiervoor geldt eigenlijk hetzelfde als wat ik bij de eerdere leerdoel heb beschreven. In [Feature Detection](./course/Featuredetection.md) heb ik wat uitgebreider gedocumenteerd over hoe ik Feature Detection heb toegepast op mijn applicatie.
