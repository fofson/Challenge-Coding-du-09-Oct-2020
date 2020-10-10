function Offre(titre,validite,niveau,diplome,entreprise,description,categorie){
    this.titre = titre,
    this.vali = validite,
    this.niv = niveau,
    this.dipl = diplome,
    this.comp = entreprise,
    this.desc = description,
    this.cat = categorie
}
let offres =[];
let offre = "";

function formulaire(insertion){
    var y = document.insertion.categorie.selectedIndex;
    var x = document.insertion.niveau.selectedIndex;
    
	if (x == 0) return;
    if (y == 0) return;
    
    var titre = document.insertion.titre.value;
    var validite = document.insertion.validite.value;
    var niveau = document.insertion.niveau.options[x].value;
    var diplome = document.insertion.diplom.value;
    var entreprise = document.insertion.Entreprise.value;
    var description = document.insertion.description.value;
    var categorie = document.insertion.categorie.options[y].value;
    alert("salut fof");
    
    while(offre){
        const offre = new Offre(titre,validite,niveau,diplome,entreprise,description,categorie);
        offres.push(offre);
        offre++;
    }
    let listOffres = "";
    offres.forEach(off =>
        listOffres += '<tr><td>${off.vali}</td><td>${off.titre}</td><td>${off.niv}</td><td>${off.dipl}</td><td>${off.comp}</td><td>${off.desc}</td><td>${off.cat}</td></tr>')
    document.getElementById('tableau').innerHTML = listOffres;
}


// function formulaire(insertion){
 

    // var y = document.insertion.categorie.selectedIndex;
    // var x = document.insertion.niveau.selectedIndex;
    
	// if (x == 0) return;
    // if (y == 0) return;
    
    // var titre = document.insertion.titre.value;
    // var validite = document.insertion.validite.value;
    // var niveau = document.insertion.niveau.options[x].value;
    // var diplome = document.insertion.diplom.value;
    // var entreprise = document.insertion.Entreprise.value;
    // var description = document.insertion.description.value;
    // var categorie = document.insertion.categorie.options[y].value;
    // alert("niveau : " + niveau + "\n Date: " + date_validite + "\n Titre: " + titre + "\n Description: " + description + "\n diplome: " + diplome + "\n boite: " + Entreprise + "\n catégorie: " + categorie);

    // const tbody = document.getElementById('tableau');
    // const tr = document.createElement('tr');
    // const td = document.createElement('td');
    // const data = tr.td;
    //  data.text = date_validite;
    //  data.text += titre;
    //  data.text += Entreprise;
    //  data.text += niveau;
    //  data.text += diplome;
    //  data.text += categorie;
    //     // td += '<td>' + titre + '</td>';
    //     // td += '<td>' + Entreprise + '</td>';
    //     // td += '<td>' + niveau + '</td>';
    //     // td += '<td>' + diplome + '</td>';
    //     // td += '<td>' + categorie + '</td>';
    // tbody.append(data);





    
    // // function getXMLHttpRequest() {
    //     var xhr = null;
        
    //     if (window.XMLHttpRequest || window.ActiveXObject) {
    //         if (window.ActiveXObject) {
    //             try {
    //                 xhr = new ActiveXObject("Msxml2.XMLHTTP");
    //                 var a = xhr.OpenTextFile("D:\\MES PROJETS\\CHALLENGE-JPE-FACEBOOK\\Challenge-du-09-Oct-JPE\\Base_de_donnes\\data_base.txt", 1,true);
    //                 a.WriteLine("Salut cppFrance !");
    //                 a.Close();
    //             } catch(e) {
    //                 xhr = new ActiveXObject("Microsoft.XMLHTTP");
    //                 var a = xhr.OpenTextFile("D:\\MES PROJETS\\CHALLENGE-JPE-FACEBOOK\\Challenge-du-09-Oct-JPE\\Base_de_donnes\\data_base.txt", 1,true);
    //                 a.WriteLine("Salut cppFrance !");
    //                 a.Close();
    //             }
    //         } else {
    //             xhr = new XMLHttpRequest(); 
    //             var a = xhr.OpenTextFile("D:\\MES PROJETS\\CHALLENGE-JPE-FACEBOOK\\Challenge-du-09-Oct-JPE\\Base_de_donnes\\data_base.txt", 1,true);
    //             a.WriteLine("Salut cppFrance !");
    //             a.Close();
    //         }
    //     } else {
    //         alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
    //         return null;
    //     } 
    //     alert("niveau : " + niveau + "\n Date: " + date_validite + "\n Titre: " + titre + "\n Description: " + description + "\n diplome: " + diplome + "\n boite: " + Entreprise + "\n catégorie: " + categorie);

        // var a = xhr.OpenTextFile("D:\\MES PROJETS\\CHALLENGE-JPE-FACEBOOK\\Challenge-du-09-Oct-JPE\\Base_de_donnes\\data_base.txt", 1,true);
        // a.WriteLine("Salut cppFrance !");
        // a.Close();
        // return xhr;

    // }

// }
