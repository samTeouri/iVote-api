import { Commune } from "../models/Commune";
import { Prefecture } from "../models/Prefecture"

export const seedPrefectures = async () => {
    
    // Région des Savanes
    // Cinkassé
    const prefectureCinkasse = await Prefecture.create(
        {
            nom: "Cinkassé"
        }
    );
    prefectureCinkasse.setRegion(1);

    const communesPrefectureCinkasse = await Commune.bulkCreate(
        [
            {
                nom: "Cinkassé 1",
            },
            {
                nom: "Cinkassé 2",
            },
        ]
    )
    prefectureCinkasse.setCommunes(communesPrefectureCinkasse);

    // Kpendjal
    const prefectureKpendjal = await Prefecture.create(
        {
            nom: "Kpendjal"
        }
    );
    prefectureKpendjal.setRegion(1);

    const communesPrefectureKpendjal = await Commune.bulkCreate(
        [
            {
                nom: "Kpendjal 1",
            },
            {
                nom: "Kpendjal 2",
            },
        ]
    )
    prefectureKpendjal.setCommunes(communesPrefectureKpendjal);

    // Kpendjal-Ouest
    const prefectureKpendjalOuest = await Prefecture.create(
        {
            nom: "Kpendjal-Ouest"
        }
    );
    prefectureKpendjalOuest.setRegion(1);

    const communesPrefectureKpendjalOuest = await Commune.bulkCreate(
        [
            {
                nom: "KpendjalOuest 1",
            },
            {
                nom: "KpendjalOuest 2",
            },
        ]
    )
    prefectureKpendjalOuest.setCommunes(communesPrefectureKpendjalOuest);

    // Oti
    const prefectureOti = await Prefecture.create(
        {
            nom: "Oti"
        }
    );
    prefectureOti.setRegion(1);

    const communesPrefectureOti = await Commune.bulkCreate(
        [
            {
                nom: "Oti 1",
            },
            {
                nom: "Oti 2",
            },
        ]
    )
    prefectureOti.setCommunes(communesPrefectureOti);

    // Oti-Sud
    const prefectureOtiSud = await Prefecture.create(
        {
            nom: "Oti"
        }
    );
    prefectureOtiSud.setRegion(1);

    const communesPrefectureOtiSud = await Commune.bulkCreate(
        [
            {
                nom: "Oti-Sud 1",
            },
            {
                nom: "Oti-Sud 2",
            },
        ]
    )
    prefectureOtiSud.setCommunes(communesPrefectureOtiSud);

    // Tandjouaré
    const prefectureTandjouare = await Prefecture.create(
        {
            nom: "Tandjouaré"
        }
    );
    prefectureTandjouare.setRegion(1);

    const communesPrefectureTandjouare = await Commune.bulkCreate(
        [
            {
                nom: "Tandjouaré 1",
            },
            {
                nom: "Tandjouaré 2",
            },
        ]
    )
    prefectureTandjouare.setCommunes(communesPrefectureTandjouare);

    // Tône
    const prefectureTone = await Prefecture.create(
        {
            nom: "Tône"
        }
    );
    prefectureTone.setRegion(1);

    const communesPrefectureTone = await Commune.bulkCreate(
        [
            {
                nom: "Tône 1",
            },
            {
                nom: "Tône 2",
            },
            {
                nom: "Tône 3",
            },
            {
                nom: "Tône 4",
            },
        ]
    )
    prefectureTone.setCommunes(communesPrefectureTone);

    // Région de la Kara
    // Assoli
    const prefectureAssoli = await Prefecture.create(
        {
            nom: "Assoli"
        }
    );
    prefectureAssoli.setRegion(2);

    const communesPrefectureAssoli = await Commune.bulkCreate(
        [
            {
                nom: "Assoli 1",
            },
            {
                nom: "Assoli 2",
            },
            {
                nom: "Assoli 3",
            }
        ]
    )
    prefectureAssoli.setCommunes(communesPrefectureAssoli);

    // Bassar
    const prefectureBassar = await Prefecture.create(
        {
            nom: "Bassar"
        }
    );
    prefectureBassar.setRegion(2);

    const communesPrefectureBassar = await Commune.bulkCreate(
        [
            {
                nom: "Bassar 1",
            },
            {
                nom: "Bassar 2",
            },
            {
                nom: "Bassar 3",
            },
            {
                nom: "Bassar 4",
            },
        ]
    )
    prefectureBassar.setCommunes(communesPrefectureBassar);

    // Binah
    const prefectureBinah = await Prefecture.create(
        {
            nom: "Binah"
        }
    );
    prefectureBinah.setRegion(2);

    const communesPrefectureBinah = await Commune.bulkCreate(
        [
            {
                nom: "Binah 1",
            },
            {
                nom: "Binah 2",
            },
        ]
    )
    prefectureBinah.setCommunes(communesPrefectureBinah);

    // Dankpen
    const prefectureDankpen = await Prefecture.create(
        {
            nom: "Dankpen"
        }
    );
    prefectureDankpen.setRegion(2);

    const communesPrefectureDankpen = await Commune.bulkCreate(
        [
            {
                nom: "Dankpen 1",
            },
            {
                nom: "Dankpen 2",
            },
            {
                nom: "Dankpen 3",
            },
        ]
    )
    prefectureDankpen.setCommunes(communesPrefectureDankpen);

    // Doufelgou
    const prefectureDoufelgou = await Prefecture.create(
        {
            nom: "Doufelgou"
        }
    );
    prefectureDoufelgou.setRegion(2);

    const communesPrefectureDoufelgou = await Commune.bulkCreate(
        [
            {
                nom: "Doufelgou 1",
            },
            {
                nom: "Doufelgou 2",
            },
            {
                nom: "Doufelgou 3",
            },
        ]
    )
    prefectureDoufelgou.setCommunes(communesPrefectureDoufelgou);

    // Kéran
    const prefectureKeran = await Prefecture.create(
        {
            nom: "Kéran"
        }
    );
    prefectureKeran.setRegion(2);

    const communesPrefectureKeran = await Commune.bulkCreate(
        [
            {
                nom: "Kéran 1",
            },
            {
                nom: "Kéran 2",
            },
            {
                nom: "Kéran 3",
            },
        ]
    )
    prefectureKeran.setCommunes(communesPrefectureKeran);

    // Kozah
    const prefectureKozah = await Prefecture.create(
        {
            nom: "Kozah"
        }
    );
    prefectureKozah.setRegion(2);

    const communesPrefectureKozah = await Commune.bulkCreate(
        [
            {
                nom: "Kozah 1",
            },
            {
                nom: "Kozah 2",
            },
            {
                nom: "Kozah 3",
            },
            {
                nom: "Kozah 4",
            },
        ]
    )
    prefectureKozah.setCommunes(communesPrefectureKozah);

    // Région Centrale
    // Blitta
    const prefectureBlitta = await Prefecture.create(
        {
            nom: "Blitta"
        }
    );
    prefectureBlitta.setRegion(3);

    const communesPrefectureBlitta = await Commune.bulkCreate(
        [
            {
                nom: "Blitta 1",
            },
            {
                nom: "Blitta 2",
            },
            {
                nom: "Blitta 3",
            },
        ]
    )
    prefectureBlitta.setCommunes(communesPrefectureBlitta);

    // Sotouboua
    const prefectureSotouboua = await Prefecture.create(
        {
            nom: "Sotouboua"
        }
    );
    prefectureSotouboua.setRegion(3);

    const communesPrefectureSotouboua = await Commune.bulkCreate(
        [
            {
                nom: "Sotouboua 1",
            },
            {
                nom: "Sotouboua 2",
            },
            {
                nom: "Sotouboua 3",
            },
        ]
    )
    prefectureSotouboua.setCommunes(communesPrefectureSotouboua);

    // Tchamba
    const prefectureTchamba = await Prefecture.create(
        {
            nom: "Tchamba"
        }
    );
    prefectureTchamba.setRegion(3);

    const communesPrefectureTchamba = await Commune.bulkCreate(
        [
            {
                nom: "Tchamba 1",
            },
            {
                nom: "Tchamba 2",
            },
            {
                nom: "Tchamba 3",
            },
        ]
    )
    prefectureTchamba.setCommunes(communesPrefectureTchamba);

    // Tchaoudjo
    const prefectureTchaoudjo = await Prefecture.create(
        {
            nom: "Tchaoudjo"
        }
    );
    prefectureTchaoudjo.setRegion(3);

    const communesPrefectureTchaoudjo = await Commune.bulkCreate(
        [
            {
                nom: "Tchaoudjo 1",
            },
            {
                nom: "Tchaoudjo 2",
            },
            {
                nom: "Tchaoudjo 3",
            },
            {
                nom: "Tchaoudjo 4",
            },
        ]
    )
    prefectureTchaoudjo.setCommunes(communesPrefectureTchaoudjo);

    // Mô
    const prefectureMo = await Prefecture.create(
        {
            nom: "Mô"
        }
    );
    prefectureMo.setRegion(3);

    const communesPrefectureMo = await Commune.bulkCreate(
        [
            {
                nom: "Mô 1",
            },
            {
                nom: "Mô 2",
            },
        ]
    )
    prefectureMo.setCommunes(communesPrefectureMo);

    // Agou
    const prefectureAgou = await Prefecture.create(
        {
            nom: "Agou"
        }
    );
    prefectureAgou.setRegion(4);

    const communesPrefectureAgou = await Commune.bulkCreate(
        [
            {
                nom: "Agou 1",
            },
            {
                nom: "Agou 2",
            },
        ]
    )
    prefectureAgou.setCommunes(communesPrefectureAgou);

    // Akébou
    const prefectureAkebou = await Prefecture.create(
        {
            nom: "Akébou"
        }
    );
    prefectureAkebou.setRegion(4);

    const communesPrefectureAkebou = await Commune.bulkCreate(
        [
            {
                nom: "Akébou 1",
            },
            {
                nom: "Akébou 2",
            },
        ]
    )
    prefectureAkebou.setCommunes(communesPrefectureAkebou);

    // Amou
    const prefectureAmou = await Prefecture.create(
        {
            nom: "Amou"
        }
    );
    prefectureAmou.setRegion(4);

    const communesPrefectureAmou = await Commune.bulkCreate(
        [
            {
                nom: "Amou 1",
            },
            {
                nom: "Amou 2",
            },
            {
                nom: "Amou 3",
            },
        ]
    )
    prefectureAmou.setCommunes(communesPrefectureAmou);

    // Anié
    const prefectureAnie = await Prefecture.create(
        {
            nom: "Anié"
        }
    );
    prefectureAnie.setRegion(4);

    const communesPrefectureAnie = await Commune.bulkCreate(
        [
            {
                nom: "Anié 1",
            },
            {
                nom: "Anié 2",
            },
        ]
    )
    prefectureAnie.setCommunes(communesPrefectureAnie);

    // Danyi
    const prefectureDanyi = await Prefecture.create(
        {
            nom: "Danyi"
        }
    );
    prefectureDanyi.setRegion(4);

    const communesPrefectureDanyi = await Commune.bulkCreate(
        [
            {
                nom: "Danyi 1",
            },
            {
                nom: "Danyi 2",
            },
        ]
    )
    prefectureDanyi.setCommunes(communesPrefectureDanyi);

    // Est-Mono
    const prefectureEstMono = await Prefecture.create(
        {
            nom: "Est-Mono"
        }
    );
    prefectureEstMono.setRegion(4);

    const communesPrefectureEstMono = await Commune.bulkCreate(
        [
            {
                nom: "Est-Mono 1",
            },
            {
                nom: "Est-Mono 2",
            },
            {
                nom: "Est-Mono 3",
            },
        ]
    )
    prefectureEstMono.setCommunes(communesPrefectureEstMono);

    // Haho
    const prefectureHaho = await Prefecture.create(
        {
            nom: "Haho"
        }
    );
    prefectureHaho.setRegion(4);

    const communesPrefectureHaho = await Commune.bulkCreate(
        [
            {
                nom: "Haho 1",
            },
            {
                nom: "Haho 2",
            },
            {
                nom: "Haho 3",
            },
            {
                nom: "Haho 4",
            },
        ]
    )
    prefectureHaho.setCommunes(communesPrefectureHaho);

    // Kloto
    const prefectureKloto = await Prefecture.create(
        {
            nom: "Kloto"
        }
    );
    prefectureKloto.setRegion(4);

    const communesPrefectureKloto = await Commune.bulkCreate(
        [
            {
                nom: "Kloto 1",
            },
            {
                nom: "Kloto 2",
            },
            {
                nom: "Kloto 3",
            },
        ]
    )
    prefectureKloto.setCommunes(communesPrefectureKloto);

    // Kpele
    const prefectureKpele = await Prefecture.create(
        {
            nom: "Kpélé"
        }
    );
    prefectureKpele.setRegion(4);

    const communesPrefectureKpele = await Commune.bulkCreate(
        [
            {
                nom: "Kpélé 1",
            },
            {
                nom: "Kpélé 2",
            },
        ]
    )
    prefectureKpele.setCommunes(communesPrefectureKpele);

    // Moyen-Mono
    const prefectureMoyenMono = await Prefecture.create(
        {
            nom: "Moyen-Mono"
        }
    );
    prefectureMoyenMono.setRegion(4);

    const communesPrefectureMoyenMono = await Commune.bulkCreate(
        [
            {
                nom: "Moyen-Mono 1",
            },
            {
                nom: "Moyen-Mono 2",
            },
        ]
    )
    prefectureMoyenMono.setCommunes(communesPrefectureMoyenMono);

    // Ogou
    const prefectureOgou = await Prefecture.create(
        {
            nom: "Ogou"
        }
    );
    prefectureOgou.setRegion(4);

    const communesPrefectureOgou = await Commune.bulkCreate(
        [
            {
                nom: "Ogou 1",
            },
            {
                nom: "Ogou 2",
            },
            {
                nom: "Ogou 3",
            },
            {
                nom: "Ogou 4",
            },
        ]
    )
    prefectureOgou.setCommunes(communesPrefectureOgou);

    // Wawa
    const prefectureWawa = await Prefecture.create(
        {
            nom: "Wawa"
        }
    );
    prefectureWawa.setRegion(4);

    const communesPrefectureWawa = await Commune.bulkCreate(
        [
            {
                nom: "Wawa 1",
            },
            {
                nom: "Wawa 2",
            },
            {
                nom: "Wawa 3",
            },
        ]
    )
    prefectureWawa.setCommunes(communesPrefectureWawa);

    // Région maritime
    // Agoè-Nyivé
    const prefectureAgoeNyive = await Prefecture.create(
        {
            nom: "Agoè-Nyivé"
        }
    );
    prefectureAgoeNyive.setRegion(5);

    const communesPrefectureAgoeNyive = await Commune.bulkCreate(
        [
            {
                nom: "Agoè-Nyivé 1",
            },
            {
                nom: "Agoè-Nyivé 2",
            },
            {
                nom: "Agoè-Nyivé 3",
            },
            {
                nom: "Agoè-Nyivé 4",
            },
            {
                nom: "Agoè-Nyivé 5",
            },
            {
                nom: "Agoè-Nyivé 6",
            },
        ]
    )
    prefectureAgoeNyive.setCommunes(communesPrefectureAgoeNyive);

    // Avé
    const prefectureAve = await Prefecture.create(
        {
            nom: "Avé"
        }
    );
    prefectureAve.setRegion(5);

    const communesPrefectureAve = await Commune.bulkCreate(
        [
            {
                nom: "Avé 1",
            },
            {
                nom: "Avé 2",
            },
        ]
    )
    prefectureAve.setCommunes(communesPrefectureAve);

    // Bas-Mono
    const prefectureBasMono = await Prefecture.create(
        {
            nom: "Bas-Mono"
        }
    );
    prefectureBasMono.setRegion(5);

    const communesPrefectureBasMono = await Commune.bulkCreate(
        [
            {
                nom: "Bas-Mono 1",
            },
            {
                nom: "Bas-Mono 2",
            },
        ]
    )
    prefectureBasMono.setCommunes(communesPrefectureBasMono);

    // Golfe
    const prefectureGolfe = await Prefecture.create(
        {
            nom: "Golfe"
        }
    );
    prefectureGolfe.setRegion(5);

    const communesPrefectureGolfe = await Commune.bulkCreate(
        [
            {
                nom: "Golfe 1",
            },
            {
                nom: "Golfe 2",
            },
            {
                nom: "Golfe 3",
            },
            {
                nom: "Golfe 4",
            },
            {
                nom: "Golfe 5",
            },
            {
                nom: "Golfe 6",
            },
            {
                nom: "Golfe 7",
            },
        ]
    )
    prefectureGolfe.setCommunes(communesPrefectureGolfe);

    // Lacs
    const prefectureLacs = await Prefecture.create(
        {
            nom: "Lacs"
        }
    );
    prefectureLacs.setRegion(5);

    const communesPrefectureLacs = await Commune.bulkCreate(
        [
            {
                nom: "Lacs 1",
            },
            {
                nom: "Lacs 2",
            },
            {
                nom: "Lacs 3",
            },
            {
                nom: "Lacs 4",
            },
        ]
    )
    prefectureLacs.setCommunes(communesPrefectureLacs);

    // Vo
    const prefectureVo = await Prefecture.create(
        {
            nom: "Vo"
        }
    );
    prefectureVo.setRegion(5);

    const communesPrefectureVo = await Commune.bulkCreate(
        [
            {
                nom: "Vo 1",
            },
            {
                nom: "Vo 2",
            },
            {
                nom: "Vo 3",
            },
            {
                nom: "Vo 4",
            },
        ]
    )
    prefectureVo.setCommunes(communesPrefectureVo);

    // Yoto
    const prefectureYoto = await Prefecture.create(
        {
            nom: "Yoto"
        }
    );
    prefectureYoto.setRegion(5);

    const communesPrefectureYoto = await Commune.bulkCreate(
        [
            {
                nom: "Yoto 1",
            },
            {
                nom: "Yoto 2",
            },
            {
                nom: "Yoto 3",
            },
        ]
    )
    prefectureYoto.setCommunes(communesPrefectureYoto);

    // Zio
    const prefectureZio = await Prefecture.create(
        {
            nom: "Zio"
        }
    );
    prefectureZio.setRegion(5);

    const communesPrefectureZio = await Commune.bulkCreate(
        [
            {
                nom: "Zio 1",
            },
            {
                nom: "Zio 2",
            },
            {
                nom: "Zio 3",
            },
            {
                nom: "Zio 4",
            },
        ]
    )
    prefectureZio.setCommunes(communesPrefectureZio);
}