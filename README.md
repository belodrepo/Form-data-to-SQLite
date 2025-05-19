Cél:

    A korábban elkészített HTML űrlap adatait elküldeni fetch() segítségével a webszervernek.

    A szerver az adatokat SQLite adatbázisba menti.

    Mindez böngészőből, http://localhost:3000 címen működjön.

Nulladik lépés: Node.Js telepítése Windows operációs rendszerre

1. Nyisd meg a böngészőt

Lépj a hivatalos Node.js weboldalra:
👉 https://nodejs.org/
2. Válaszd ki a megfelelő verziót

    LTS (Long Term Support): ajánlott a stabil, hosszú távon támogatott verzió.

    Current: fejlesztőknek, újabb funkciókkal, de nem mindig stabil.

3. Töltsd le az .msi telepítőfájlt

Kattints az LTS verzió alatti zöld gombra.
4. Futtasd az installer fájlt

Kattints duplán a letöltött .msi fájlra.
5. Telepítési lépések:

    Fogadd el a licencfeltételeket

    Válaszd ki az alapértelmezett telepítési helyet

    Hagyj minden beállítást alapértelmezetten (pl. „Add to PATH” legyen bepipálva)

    Kattints a "Next", majd végül az "Install" gombra

6. Telepítés ellenőrzése:

Nyisd meg a Parancssort (CMD vagy PowerShell), majd írd be:

node -v

Ez kiírja a Node.js verziószámát (pl. v20.10.0)

Ezután írd be:

npm -v

Ez a Node Package Manager verzióját írja ki.

------------------------------------------------------------
Az alkalmazás fejlesztés lépései: FONTOS: A Doc mappában segítségként képernyő képek!

1. Lépés: Projektmappa létrehozása a VS Code fejlesztőkörnyezet használatával

Hozz létre egy új mappát a számítógépeden, például sajat_projekt_nev-form néven. Ebben fogod tárolni a HTML, JavaScript és szerver fájlokat.

2. Lépés: Kliens (frontend) és szerver (backend) struktúra

A projektmappán belül hozz létre egy public nevű almappát. Ebbe kerül majd az HTML és a hozzá tartozó JavaScript fájl. A szerveroldali fájl (például server.js) a gyökérmappában marad.

3. Lépés: Szükséges Node.js csomagok telepítése

Inicializáld a projektet npm init -y paranccsal, majd telepítsd az express és sqlite3, valamint a CORS csomagokat a npm install express sqlite3 cors paranccsal.

4. Lépés: Express.js szerver beállítása

Hozz létre egy szervert az express segítségével, amely kiszolgálja a public mappában található statikus fájlokat (pl. HTML, JS). Használj express.static() middleware-t erre.

5. Lépés: SQLite adatbázis létrehozása és kezelése

A szerver indulásakor csatlakozz egy users.db nevű SQLite adatbázishoz. Hozd létre benne a users táblát, ha még nem létezik. A tábla mezői legyenek: vezetéknév, keresztnév, email és telefonszám.

6. Lépés: POST végpont az űrlapadatok fogadásához

Készíts egy POST típusú útvonalat (/users), amely a kliens által elküldött JSON adatokból kinyeri a mezőket, majd elmenti őket az adatbázisba.

7. Lépés: Middleware beállítása JSON adatokhoz

Az Express szerveren aktiváld az express.json() middleware-t, hogy tudja fogadni a JSON típusú kéréseket.

8. Lépés: CORS probléma megelőzése

Ne használj file:/// protokollt a böngészőben, mert ilyenkor az origin null lesz, és a böngésző blokkolni fogja a kérést CORS hibával. Ehelyett mindig http://localhost:PORT címen futtasd a szervert, és azon keresztül nyisd meg az oldalt.

Ha a frontend és a backend egyazon szerveren, egyazon porton fut (mint jelen esetben), akkor nincs szükség cors csomagra vagy külön CORS beállításokra.

9. Lépés: A böngésző számára elérhetővé tett JavaScript

Győződj meg arról, hogy a HTML fájlban a <script src="..."> hivatkozás pontosan egyezik a fájl nevével, és ez a fájl elérhető a public mappából. Ha nem, a szerver egy HTML hibaoldalt adhat vissza JavaScript helyett, amit a böngésző MIME típus hibával blokkol.

10. Lépés: Szerver futtatása

Indítsd el az Express szervert node server.js paranccsal. A szerver figyelje például a 3000-es portot.

11. Lépés: Weboldal megnyitása böngészőben

A böngésző címsorába írd be: http://localhost:3000 – ne nyisd meg az index.html fájlt közvetlenül fájlkezelőből, mert az CORS és MIME típus hibákhoz vezethet.

12. Lépés: Tesztelés

Töltsd ki az űrlapot, kattints az elküldésre, majd ellenőrizd:

    hogy megjelennek-e az adatok a táblázatban,

    hogy nem kapsz hibaüzenetet a böngésző konzolban,

    és hogy az adat bekerül-e az SQLite adatbázisba.

12/A. Lépés: Ellenőrizd hogy az első futtatáskor létrejött users.db adatbázis fájlban megjelentek-e az űrlapon megadott adatok.

12/B. Lépés: (opcionális) Ellenőrzés SQLite segítségével

Parancssorból futtasd az sqlite3 users.db parancsot, majd a SELECT * FROM users; SQL parancsot, hogy lásd a mentett adatokat.
