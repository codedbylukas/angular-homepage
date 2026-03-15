import {
  HomeBtn,
  init_home_btn
} from "./chunk-5Y4HUIIF.js";
import {
  init_router,
  provideRouter
} from "./chunk-B3WYK46A.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-6BFDG5YE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/fun-facts/fun-facts.html
var fun_facts_default;
var init_fun_facts = __esm({
  "angular:jit:template:src/app/fun-facts/fun-facts.html"() {
    fun_facts_default = '<div class="half-center">\n  <h1>Fun Facts</h1>\n</div>\n\n<div class="center">\n  <button (click)="playAudio()" id="button-click">Click mich</button>\n  <button id="currentFact">Clicke den anderen Button um den Fackt zu sehen. </button>\n</div>\n<div class="end-center">\n  <app-home-btn></app-home-btn>\n</div>\n';
  }
});

// angular:jit:style:src/app/fun-facts/fun-facts.scss
var fun_facts_default2;
var init_fun_facts2 = __esm({
  "angular:jit:style:src/app/fun-facts/fun-facts.scss"() {
    fun_facts_default2 = "/* src/app/fun-facts/fun-facts.scss */\nbutton {\n  background-color: #0ae2f1;\n  border: none;\n  border-radius: 50%;\n  padding: 10px;\n  width: 180px;\n  font-size: 40px;\n  color: white;\n}\nh1 {\n  font-size: 40px;\n}\n.center {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n.half-center {\n  display: flex;\n  justify-content: center;\n}\n.end-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#currentFact {\n  background-color: rgba(33, 241, 78, 0.8156862745);\n  font-size: 20px;\n  border-radius: 15%;\n  z-index: 2;\n}\n/*# sourceMappingURL=fun-facts.css.map */\n";
  }
});

// src/app/fun-facts/fun-facts.ts
var playing, audio, facts, FunFacts;
var init_fun_facts3 = __esm({
  "src/app/fun-facts/fun-facts.ts"() {
    "use strict";
    init_tslib_es6();
    init_fun_facts();
    init_fun_facts2();
    init_core();
    init_home_btn();
    playing = false;
    facts = [
      "Octopusse haben drei Herzen.",
      "Ein Tag auf der Venus dauert l\xE4nger als ein Jahr dort.",
      "Haie existieren l\xE4nger als B\xE4ume.",
      "Der Mond entfernt sich jedes Jahr etwa 3,8 cm von der Erde.",
      "Wombats produzieren w\xFCrfelf\xF6rmigen Kot.",
      "Honig verdirbt praktisch nie.",
      "Ein Blitz ist hei\xDFer als die Oberfl\xE4che der Sonne.",
      "Es gibt mehr m\xF6gliche Schachpartien als Atome im Universum.",
      "Die ISS ist eines der teuersten Bauwerke der Menschheit.",
      "Pinguine k\xF6nnen \xFCber 500 Meter tief tauchen.",
      "Katzen haben \xFCber 100 verschiedene Laut\xE4u\xDFerungen.",
      "Hunde besitzen etwa 300 Millionen Geruchsrezeptoren.",
      "Der Pazifik ist gr\xF6\xDFer als alle Kontinente zusammen.",
      "Bambus kann \xFCber 90 cm pro Tag wachsen.",
      "Kolibris k\xF6nnen r\xFCckw\xE4rts fliegen.",
      "Ein Blauwalherz kann \xFCber 180 kg wiegen.",
      "Der Mensch blinzelt etwa 20.000 Mal pro Tag.",
      "Die Erde ist etwa 4,5 Milliarden Jahre alt.",
      "Die Sonne enth\xE4lt \xFCber 99 % der Masse des Sonnensystems.",
      "Saturn k\xF6nnte theoretisch auf Wasser schwimmen.",
      "Der h\xF6chste Wasserfall der Welt ist Angel Falls.",
      "Der gr\xF6\xDFte Vulkan ist Olympus Mons auf dem Mars.",
      "Ein Regentropfen f\xE4llt etwa mit 30 km/h.",
      "Der menschliche K\xF6rper besteht zu etwa 60 % aus Wasser.",
      "Einige Quallen sind biologisch fast unsterblich.",
      "Der Marianengraben ist \xFCber 11 km tief.",
      "Der schnellste Vogel ist der Wanderfalke.",
      "Es gibt \xFCber 20.000 bekannte Bienenarten.",
      "Der gr\xF6\xDFte Fisch ist der Walhai.",
      "Einige Fr\xF6sche k\xF6nnen einfrieren und \xFCberleben.",
      "Die l\xE4ngste Gebirgskette liegt unter Wasser.",
      "Der Jupiter hat \xFCber 90 bekannte Monde.",
      "Einige Pilze k\xF6nnen im Dunkeln leuchten.",
      "Ein menschliches Herz schl\xE4gt etwa 100.000 Mal t\xE4glich.",
      "Ein Blitz schl\xE4gt etwa 100 Mal pro Sekunde auf der Erde ein.",
      "Einige Ameisen betreiben Landwirtschaft.",
      "Es gibt mehr B\xE4ume auf der Erde als Sterne in der Milchstra\xDFe.",
      "Der menschliche K\xF6rper hat etwa 37 Billionen Zellen.",
      "Einige Eidechsen k\xF6nnen ihren Schwanz abwerfen.",
      "Die Antarktis ist die gr\xF6\xDFte W\xFCste der Erde.",
      "Der gr\xF6\xDFte Dinosaurier war wahrscheinlich Argentinosaurus.",
      "Ein Elefant kann \xFCber 10 Liter Wasser im R\xFCssel tragen.",
      "Die Erdrotation verlangsamt sich minimal jedes Jahr.",
      "Ein Schneeflocke hat oft sechs Arme.",
      "Die meisten Meteoriten stammen aus dem Asteroideng\xFCrtel.",
      "Der Mount Everest w\xE4chst jedes Jahr minimal.",
      "Der menschliche K\xF6rper enth\xE4lt etwa 206 Knochen.",
      "Einige Fische k\xF6nnen ihr Geschlecht wechseln.",
      "Einige Pflanzen k\xF6nnen Fleisch verdauen.",
      "Der l\xE4ngste Knochen im K\xF6rper ist der Oberschenkelknochen.",
      "Der Amazonas f\xFChrt mehr Wasser als jeder andere Fluss.",
      "Einige Tiere sehen ultraviolettes Licht.",
      "Der Mars hat die gr\xF6\xDFten Staubst\xFCrme im Sonnensystem.",
      "Einige B\xE4ume k\xF6nnen \xFCber 5000 Jahre alt werden.",
      "Korallenriffe sind vom Weltraum sichtbar.",
      "Der gr\xF6\xDFte bekannte Stern ist UY Scuti.",
      "Einige Pilze k\xF6nnen Plastik abbauen.",
      "Der gr\xF6\xDFte bekannte Eisberg war gr\xF6\xDFer als Jamaika.",
      "Der menschliche K\xF6rper verliert t\xE4glich Millionen Hautzellen.",
      "Einige Tiere nutzen Magnetfelder zur Navigation.",
      "Einige Bakterien \xFCberleben extreme Strahlung.",
      "Der gr\xF6\xDFte Regenwald ist der Amazonas.",
      "Die Sahara war fr\xFCher eine gr\xFCne Landschaft.",
      "Ein Kolibri schl\xE4gt seine Fl\xFCgel bis zu 80 Mal pro Sekunde.",
      "Die Erde dreht sich am \xC4quator mit etwa 1670 km/h.",
      "Ein Blitz kann bis zu 30.000 Grad hei\xDF werden.",
      "Einige V\xF6gel k\xF6nnen im Schlaf fliegen.",
      "Ein Wal kann \xFCber 30 Meter lang werden.",
      "Der l\xE4ngste Fluss ist entweder Nil oder Amazonas.",
      "Ein Oktopus hat blaues Blut.",
      "Einige Spinnen k\xF6nnen \xFCber Wasser laufen.",
      "Der Mensch produziert t\xE4glich etwa einen Liter Speichel.",
      "Einige Tiere k\xF6nnen ganze Gliedma\xDFen regenerieren.",
      "Der gr\xF6\xDFte K\xE4fer ist der Goliathk\xE4fer.",
      "Der Jupiter ist so gro\xDF, dass \xFCber 1300 Erden hinein passen.",
      "Die Milchstra\xDFe enth\xE4lt hunderte Milliarden Sterne.",
      "Der gr\xF6\xDFte Kontinent ist Asien.",
      "Der tiefste See ist der Baikalsee.",
      "Einige Haie m\xFCssen st\xE4ndig schwimmen.",
      "Die Erde ist leicht abgeflacht.",
      "Ein Jahr auf Merkur dauert 88 Tage.",
      "Ein Tag auf Merkur dauert 59 Erdtage.",
      "Einige Schildkr\xF6ten werden \xFCber 150 Jahre alt.",
      "Der schnellste Fisch ist der Segelfisch.",
      "Einige Flederm\xE4use k\xF6nnen \xFCber 160 km/h fliegen.",
      "Der menschliche Magen erneuert seine Schleimhaut st\xE4ndig.",
      "Einige B\xE4ume kommunizieren \xFCber Wurzeln.",
      "Der gr\xF6\xDFte Planet ist Jupiter.",
      "Die Sonne ist etwa 109-mal gr\xF6\xDFer als die Erde.",
      "Einige Fr\xF6sche k\xF6nnen \xFCber 20 Jahre alt werden.",
      "Der Mond verursacht Gezeiten.",
      "Ein Blitz kann mehrere Kilometer lang sein.",
      "Einige Insekten k\xF6nnen \xFCber Wasser laufen.",
      "Der gr\xF6\xDFte bekannte Krater ist \xFCber 300 km breit.",
      "Einige Tiere schlafen im Stehen.",
      "Der gr\xF6\xDFte Vogel ist der Strau\xDF.",
      "Der kleinste Vogel ist die Bienenelfe.",
      "Einige Pflanzen bewegen sich aktiv.",
      "Der Mensch hat etwa 650 Muskeln.",
      "Einige Tiere k\xF6nnen ohne Sauerstoff \xFCberleben.",
      "Der Saturn besitzt auff\xE4llige Ringe.",
      "Einige Vulkane liegen unter Wasser.",
      "Der Pazifik enth\xE4lt \xFCber die H\xE4lfte des Ozeanwassers.",
      "Einige Tiere k\xF6nnen ihre Farbe wechseln.",
      "K\xFChe haben beste Freunde und leiden unter Stress, wenn sie getrennt werden.",
      "In der Schweiz ist es illegal, nur ein einzelnes Meerschweinchen zu halten.",
      "Ein Gramm DNA kann theoretisch bis zu 215 Petabyte an Daten speichern.",
      "Bananen sind botanisch gesehen Beeren, Erdbeeren hingegen nicht.",
      "Der Erfinder der Pringles-Dose wurde nach seinem Tod in einer solchen bestattet.",
      "Wussten Sie, dass Kleopatra zeitlich n\xE4her an der Mondlandung lebte als am Bau der Pyramiden von Gizeh?",
      "Eichh\xF6rnchen vergessen jedes Jahr tausende vergrabene N\xFCsse und pflanzen so Millionen B\xE4ume.",
      "W\xF6lfe k\xF6nnen beim Heulen die Tonlage anpassen, um die Rudelgr\xF6\xDFe gr\xF6\xDFer erscheinen zu lassen.",
      "Das Wort 'Robot' stammt vom tschechischen Wort 'robota' ab, was 'Zwangsarbeit' bedeutet.",
      "Krokodile k\xF6nnen ihre Zunge nicht herausstrecken.",
      "Ein Goldfisch hat ein l\xE4ngeres Ged\xE4chtnis als drei Sekunden \u2013 es reicht Monate weit.",
      "Die Nationalhymne von Spanien hat keinen offiziellen Text.",
      "In Japan gibt es \xFCber 5 Millionen Verkaufsautomaten.",
      "Ein Blauwal kann unter Wasser T\xF6ne erzeugen, die noch in 800 km Entfernung h\xF6rbar sind.",
      "Flusspferdschwei\xDF ist r\xF6tlich und wirkt wie ein nat\xFCrlicher Sonnenschutz.",
      "Ein durchschnittlicher Wolkenhaufen wiegt etwa 500.000 Kilogramm.",
      "In Frankreich war die Guillotine noch legal, als der erste Star Wars Film in die Kinos kam.",
      "Die gesamte Weltbev\xF6lkerung w\xFCrde theoretisch in die Stadt Los Angeles passen (Schulter an Schulter).",
      "Schafe k\xF6nnen menschliche Gesichter auf Fotos wiedererkennen.",
      "Schnecken k\xF6nnen bis zu drei Jahre lang schlafen.",
      "Der Name 'Adidas' leitet sich vom Gr\xFCnder Adolf ('Adi') Dassler ab.",
      "Das l\xE4ngste jemals gemessene H\xFChnergekr\xE4chze dauerte etwa 13 Sekunden.",
      "Ratten lachen, wenn man sie kitzelt, allerdings in einem f\xFCr Menschen unh\xF6rbaren Ultraschallbereich.",
      "Der Eiffelturm kann im Sommer durch die Hitzeausdehnung um bis zu 15 cm wachsen.",
      "Schotten haben \xFCber 400 verschiedene W\xF6rter f\xFCr 'Schnee'.",
      "Das Internet wiegt etwa so viel wie eine mittelgro\xDFe Erdbeere (bezogen auf die Elektronenmasse).",
      "Man kann in der Schwerelosigkeit nicht r\xFClpsen, da sich Gase und Fl\xFCssigkeiten im Magen nicht trennen.",
      "Ein Oktopus hat neun Gehirne \u2013 eines im Kopf und eines in jedem Arm.",
      "Der \xE4lteste bekannte Hai der Welt, der Gr\xF6nlandhai, kann \xFCber 400 Jahre alt werden.",
      "K\xE4ngurus k\xF6nnen nicht r\xFCckw\xE4rts gehen.",
      "In den USA gibt es mehr Plastik-Flamingos als echte.",
      "Die Tastaturbelegung 'QWERTY' wurde entworfen, um das Schreiben zu verlangsamen, damit mechanische Schreibmaschinen nicht verhaken.",
      "Venedig steht auf Millionen von Holzpf\xE4hlen, die im Schlamm nicht verrotten, weil kein Sauerstoff hinkommt.",
      "Faultiere brauchen bis zu zwei Wochen, um eine einzige Mahlzeit zu verdauen.",
      "Die Farbe Orange wurde nach der Frucht benannt, nicht umgekehrt.",
      "Der Mount Everest ist nicht der Punkt auf der Erde, der dem Weltraum am n\xE4chsten ist (das ist der Chimborazo).",
      "Bienen k\xF6nnen Gesichter unterscheiden.",
      "In Finnland gibt es mehr Saunen als Autos.",
      "Das Herz einer Garnele befindet sich in ihrem Kopf.",
      "Eisb\xE4ren haben schwarze Haut unter ihrem wei\xDFen (eigentlich transparenten) Fell.",
      "Ein Blitzschlag ist etwa 5-mal hei\xDFer als die Sonnenoberfl\xE4che.",
      "In Deutschland gibt es ein Museum, das ausschlie\xDFlich dem Currywurst-Kult gewidmet war.",
      "Seepferdchen sind die einzigen Tiere, bei denen die M\xE4nnchen die Jungen austragen.",
      "Der erste Computerbug war eine echte Motte, die in einem Relais feststeckte.",
      "Man kann theoretisch aus Erdnussbutter Diamanten herstellen.",
      "Der Tyrannosaurus Rex lebte zeitlich n\xE4her am iPhone als am Stegosaurus.",
      "Nutella hat einen Lichtschutzfaktor von etwa 9,7 (bitte nicht als Sonnencreme nutzen!).",
      "Eine einzige Kuh st\xF6\xDFt pro Tag etwa 200 bis 500 Liter Methan aus.",
      "An Bord der Voyager-Sonden befindet sich eine goldene Schallplatte mit Ger\xE4uschen der Erde.",
      "Die Fl\xE4che Russlands ist gr\xF6\xDFer als die des Zwergplaneten Pluto.",
      "Schmetterlinge schmecken mit ihren F\xFC\xDFen.",
      "Die Unendlichkeitstaste bei einem Taschenrechner ist oft nur eine liegende 8.",
      "In Neuseeland gibt es einen Ort mit 85 Buchstaben im Namen: Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu.",
      "Es regnet auf dem Saturn und Jupiter fl\xFCssige Diamanten.",
      "Das Gehirn eines Strau\xDFes ist kleiner als seine Augen.",
      "Koalas haben fast identische Fingerabdr\xFCcke wie Menschen.",
      "Barbie-Puppen haben einen vollen Namen: Barbara Millicent Roberts.",
      "In Island gibt es keine M\xFCcken.",
      "Ein Hai kann einen einzelnen Blutstropfen in einem olympischen Schwimmbecken riechen.",
      "Der Zauberw\xFCrfel hat \xFCber 43 Trillionen verschiedene Stellungen.",
      "Der menschliche Kiefermuskel ist einer der st\xE4rksten Muskeln im K\xF6rper.",
      "Das k\xE4lteste bewohnte Dorf der Welt ist Oimjakon in Sibirien.",
      "Ein Liter Meerwasser enth\xE4lt etwa 13 Milliardstel Gramm Gold.",
      "Zitronen enthalten mehr Zucker als Erdbeeren.",
      "Pluto hat seit seiner Entdeckung bis heute noch keine einzige Runde um die Sonne vollendet.",
      "Der Erfinder des Frisbees wurde nach seinem Tod verbrannt und zu einer Frisbee-Scheibe gepresst.",
      "Das \xE4lteste noch bestehende Unternehmen der Welt ist ein Hotel in Japan (seit 705 n. Chr.).",
      "Ein neugeborener Panda ist kleiner als eine Maus.",
      "Die Zunge eines Blauwals wiegt so viel wie ein ganzer Elefant.",
      "Schweine k\xF6nnen nicht in den Himmel schauen.",
      "In Arizona ist es gesetzlich verboten, einen Kaktus zu f\xE4llen.",
      "Esel t\xF6ten j\xE4hrlich mehr Menschen als Haie.",
      "Ein Bleistift kann theoretisch eine Linie von 56 km L\xE4nge ziehen.",
      "Der Mensch teilt etwa 50 % seiner DNA mit einer Banane.",
      "In North Dakota wurde noch nie ein Erdbeben registriert.",
      "Ein Kolibri wiegt weniger als eine Ein-Euro-M\xFCnze.",
      "Die einzige Zahl, die im Deutschen so viele Buchstaben wie ihren Wert hat, ist die 'Vier'.",
      "Fliegen leben nur etwa 15 bis 30 Tage.",
      "Ein neugeborenes K\xE4nguru ist nur etwa zwei Zentimeter gro\xDF.",
      "Eskimos nutzen K\xFChlschr\xE4nke, um zu verhindern, dass ihr Essen gefriert.",
      "Lego ist der gr\xF6\xDFte Reifenhersteller der Welt (nach St\xFCckzahl).",
      "Ketchup wurde im 19. Jahrhundert als Medizin gegen Durchfall verkauft.",
      "Das erste \xFCber 1-Gbit-Netzwerk versendete Objekt war ein Bild von der Band 'Les Horribles Cernettes'.",
      "In Kentucky ist es illegal, eine Eiswaffel in der Ges\xE4\xDFtasche zu tragen.",
      "Flamingos werden rosa, weil sie Algen und Krebstiere mit viel Carotinoid fressen.",
      "Die Lippen des Menschen sind hunderte Male empfindlicher als die Fingerspitzen.",
      "Katzen k\xF6nnen ihren Kiefer nicht seitw\xE4rts bewegen.",
      "Der Name 'Google' entstand durch einen Rechtschreibfehler von 'Googol'.",
      "Es gibt auf der Welt mehr Fake-Profile als echte Menschen in Deutschland.",
      "Das l\xE4ngste Wort im Duden ist die 'Rindfleischetikettierungs\xFCberwachungsaufgaben\xFCbertragungsgesetz'.",
      "In der Schwerelosigkeit werden Astronauten bis zu 5 cm gr\xF6\xDFer.",
      "Ein einzelner Teel\xF6ffel eines Neutronensterns w\xFCrde Milliarden Tonnen wiegen.",
      "Eulen haben keine Aug\xE4pfel, sondern r\xF6hrenf\xF6rmige Augen, die fest im Sch\xE4del sitzen.",
      "Der Herzschlag eines Blauwals ist aus zwei Meilen Entfernung messbar.",
      "In Schweden gibt es ein Hotel, das komplett aus Eis besteht und jedes Jahr neu gebaut wird.",
      "Ameisenb\xE4ren haben keine Z\xE4hne.",
      "Die Freiheitsstatue tr\xE4gt Schuhgr\xF6\xDFe 875.",
      "Einige Spinnenarten f\xFCttern ihre Jungen mit 'Spinnenmilch'.",
      "Der Pazifik wird jedes Jahr um etwa 2-3 cm schmaler, w\xE4hrend der Atlantik w\xE4chst.",
      "Jeder Mensch hat einen einzigartigen Zungenabdruck."
    ];
    FunFacts = class FunFacts2 {
      playAudio() {
        if (!playing) {
          playing = true;
          let randomNumber = Math.floor(Math.random() * 204);
          audio = new Audio(`assets/audio/${randomNumber}.wav`);
          audio.onended = () => {
            playing = false;
          };
          audio.play();
          document.getElementById("currentFact").textContent = facts[randomNumber];
        } else {
          playing = false;
          audio.pause();
        }
      }
    };
    FunFacts = __decorate([
      Component({
        selector: "app-fun-facts",
        imports: [HomeBtn],
        template: fun_facts_default,
        styles: [fun_facts_default2]
      })
    ], FunFacts);
  }
});

// src/app/fun-facts/fun-facts.spec.ts
var require_fun_facts_spec = __commonJS({
  "src/app/fun-facts/fun-facts.spec.ts"(exports) {
    init_testing();
    init_router();
    init_fun_facts3();
    describe("FunFacts", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [FunFacts],
          providers: [provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(FunFacts);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should implement playAudio function", () => {
        expect(component.playAudio).toBeDefined();
        expect(typeof component.playAudio).toEqual("function");
      });
      it("function should be called when buton is clickt", () => {
        spyOn(component, "playAudio");
        const button = fixture.nativeElement.querySelector("#button-click");
        button.click();
        expect(component.playAudio).toHaveBeenCalled();
      });
      it("should define Variables", () => {
        expect(playing).toBeDefined();
        expect(audio).toBeUndefined();
        expect(facts).toBeDefined();
        expect(typeof facts).toEqual("object");
        expect(typeof playing).toEqual("boolean");
        expect(typeof audio).toEqual("undefined");
      });
    });
  }
});
export default require_fun_facts_spec();
//# sourceMappingURL=spec-app-fun-facts-fun-facts.spec.js.map
