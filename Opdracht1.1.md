# Opdracht 1.1 - Breek het web
Het Web laten 'breken' door features van het platform bewust uit te zetten. Images, custom fonts, JavaScript, kleur, breedband internet.

## Kleurenblindheid
### Mogelijke problemenn oplossingen
#### Zien van bepaalde foutmeldingen die in kleur zijn aangegeven
Denk bijvoorbeeld aan foutmeldingen in formulieren, een input field die een rode border krijgt kan moeilijk te zien zijn voor iemand die kleurenblind is.<br>
![Image of textfield](./course/textfield_1.png)

Een mogelijke oplossing hiervoor is gebruik maken van plain tekst onder het tekstvak of een popover om foutmeldingen duidelijk te weergeven.<br>
![Image of textfield](./course/textfield_2.png)

#### Websites met te veel verschillende kleuren kunnen verwarrend zijn
Er zijn bepaalde kleurcombinaties voor mensen met kleurenblindheid die een mogelijk probleem kunnen vormen.
- Groen/rood
- Groen/bruin
- Blauw/paars
- Groen/blauw
- Licht groen/geel
- Blauw/grijs
- Groen/grijs
- Groen/zwart

Het is aangeraden om een simpel kleurenpalet te gebruiken voor een ‘minimal’ design en verwarring te voorkomen.

#### Inzien van grafieken/statistieken die opgedeeld zijn in kleuren
Veel grafieken gebruiken een verschil in kleuren om categorieën op te delen, onderstaande afbeelding is een voorbeeld van een ‘slechte’ grafiek. Dit kan opgelost worden door patronen te gebruiken.
![Image of graph](./course/graphs.png)

### Testen
#### [WCAG Color Contrast Checker](https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf?hl=nl)
Deze chrome extensie veranderd kleuren van de website aan de hand van een gekozen soort kleurenblindheid. Dit geeft een beeld over hoe het eruit zou zien voor iemand met de aandoening.

#### [Check My Colours](https://www.checkmycolours.com/)
Aan de hand van een opgegeven url worden de kleuren op de voor- en achtergrond gecheckt voor kleurcontrast. Vervolgens genereert het een lijst van goed en slecht gekeurde kleurcombinaties.

### Voorbeelden
#### Kinepolis
In de meeste gevallen van kleurenblindheid gaat het goed, maar voor mensen met achromatopsie zijn de beschikbare plekken in het overzicht lastig te zien. In de onderstaande foto’s is dit te zien, de rode plekken zijn bezet en de blauwe zijn nog beschikbaar.<br>
![Image of seats](./course/seats.png)