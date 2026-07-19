import type { MorningPlan } from './dayTypes';

// Faithful Czech operational copy of the Morning Plan sections in
// TRIP_SOURCE_OF_TRUTH_v4.1_FINAL.md. It adds no new timing or logistics.
export const morningPlans: Record<string, MorningPlan> = {
  'departure-20': {
    status: 'RECHECK',
    notApplicable: 'Budíček, snídaně i odjezd na letiště zatím nejsou bezpečně určeny.',
    buffer: 'Stanovit podle potvrzení letu, ne odhadem.',
    reason: 'v3.0 neobsahuje čas letu, aerolinku, terminál ani požadovaný předstih na letišti.',
    recheck: 'Před cestou doplnit z potvrzení letu jako RECHECK.',
  },
  'tokyo-21': {
    status: 'RECOMMENDED',
    notApplicable: 'Tento den je večerní příjezd; ranní plán se nepoužije.',
    arrival: 'Toshi Center Hotel po příletu do Narity, imigrační kontrole a vyzvednutí zavazadel.',
    buffer: 'Řídit se skutečným průběhem příletu; nic dalšího není potřeba chránit.',
    reason: 'Přednost má regenerace a jednoduchá večeře poblíž hotelu.',
  },
  'tokyo-22': {
    status: 'RECOMMENDED', wakeUp: 'kolem 08:00', breakfast: 'kolem 08:20 v Toshi Center Hotel / poblíž', leave: 'kolem 09:00; při nepříjemném horku ranní taxi', arrival: 'Meiji Jingu / Harajuku kolem 09:40–10:00', buffer: 'Ráno je flexibilní; chránit pozdější potvrzený vstup do teamLabu.', reason: 'Meiji Jingu nemá rezervaci, proto je lepší klidnější pozdější start než zbytečně brzké vstávání.',
  },
  'fuji-23': {
    status: 'RECOMMENDED', wakeUp: 'kolem 06:15', breakfast: 'kolem 06:35', leave: 'taxi z Toshi Center Hotel kolem 07:10', arrival: 'oblast Tokyo Station, Marunouchi South Exit kolem 07:30–07:35', buffer: 'Přibližně 15–20 minut před potvrzeným srazem v 07:50.', reason: 'Potvrzený odjezd tour v 08:00 a hledání přesného místa srazu odůvodňují tento jediný nevyhnutelně brzký rodinný start v prvním Tokiu.',
  },
  'kyoto-24': {
    status: 'RECOMMENDED', wakeUp: 'kolem 08:00', breakfast: 'kolem 08:15–08:40', leave: 'taxi kolem 09:35, se zavazadly sbalenými už večer', arrival: 'Tokyo Station kolem 10:15', buffer: 'Asi 45 minut před potvrzeným NOZOMI 151 v 11:00.', reason: 'Budíček v 08:00 zůstává pohodový, pokud bude balení hotové předchozí večer; taxi chrání vlak bez ranního spěchu.',
  },
  'kyoto-25': {
    status: 'RECOMMENDED', wakeUp: 'kolem 08:00', breakfast: 'kolem 08:15–08:35', leave: 'taxi z KABIN Kyoto kolem 08:45', arrival: 'Kiyomizu-dera / Gojo-zaka kolem 09:10–09:20', buffer: 'Pevný bod je příjezd na potvrzený čajový obřad ve 12:15; z historických uliček použít taxi, pokud živá pěší trasa nebude zjevně pohodlná.', reason: 'Kiyomizu-dera je dohodnuté, ne rezervované. Pozdější start zachová jádro dne a vyhne se budíčku před osmou.',
  },
  'kyoto-26': {
    status: 'RECOMMENDED', wakeUp: 'kolem 08:00', breakfast: 'kolem 08:15–08:35', leave: 'ranní taxi z KABIN Kyoto kolem 08:45, pokud by veřejná doprava znamenala stres', arrival: 'Arashiyama Bamboo Grove kolem 09:15', buffer: 'Odjezd z Arashiyamy v dohodnutých 12:20 a plánované taxi na potvrzený workshop ve 14:00.', reason: 'Taxi chrání workshop a zároveň zachovává rodinný budíček v 08:00.', recheck: 'Přesná adresa workshopu zůstává RECHECK v potvrzení rezervace.',
  },
  'osaka-27': {
    status: 'RECOMMENDED', wakeUp: 'kolem 07:30', breakfast: 'kolem 07:50', leave: 'kolem 08:10, se zavazadly už sbalenými, směrem k Fushimi Inari', arrival: 'Fushimi Inari kolem 08:45–09:00', buffer: 'Jen dolní část svatyně; návrat do KABIN Kyoto kolem 10:45–11:00, zavazadla a pak přesun do Ósaky kolem 11:30.', reason: 'Je to kompromisní brzký start kvůli zavazadlům, ne ranní mise. Výstup na vrchol není potřeba.',
  },
  'nara-28': {
    status: 'RECOMMENDED', wakeUp: 'kolem 08:00', breakfast: 'kolem 08:30', leave: 'kolem 09:30 směrem na Kintetsu-Nippombashi Station', arrival: 'Kintetsu-Nara / začátek pěší trasy kolem 10:15', buffer: 'Flexibilní; den nezačíná časovanou rezervací.', reason: 'Záměrně pomalejší parkový den. Chránit Tōdai-ji, ne se snažit zvládnout každou volitelnou procházku nebo dlouhou frontu na oběd.',
  },
  'osaka-29': {
    status: 'RECOMMENDED', wakeUp: 'kolem 08:00', breakfast: 'kolem 08:30', leave: 'kolem 09:00', arrival: 'Osaka Castle Park kolem 09:30', buffer: 'Flexibilní; den nemá potvrzenou časovanou rezervaci.', reason: 'Round1 ani Umeda Sky nejsou důvodem den prodlužovat, pokud nebude energie nebo počasí.',
  },
  'miyajima-30': {
    status: 'RECOMMENDED', wakeUp: 'kolem 08:00', breakfast: 'kolem 08:15–08:35, se zavazadly sbalenými před snídaní', leave: 'použít pravidlo pohodlného taxi pro přesun na Shin-Osaka; metro jen pokud bude spolehlivě rychlejší', arrival: 'Shin-Osaka kolem 09:35–09:45', buffer: 'Přibližně 30–40 minut před potvrzeným NOZOMI 13 v 10:17.', reason: 'Vlak lze ochránit bez budíčku před osmou jen jednoduchým přesunem se zavazadly. Nepřidávat Hirošimu.',
  },
  'naoshima-31': {
    status: 'RECOMMENDED', wakeUp: 'kolem 08:00', breakfast: 'kolem 08:30', activity: 'Daisho-in nebo pomalé ostrovní ráno; Mount Misen je OPTIONAL, ne výchozí plán.', leave: 'z Mikuniya kolem 11:30', arrival: 'Miyajima Pier kolem 11:50, připraveni na doporučený trajekt 12:10–12:25', buffer: 'Přibližně 20 minut před zamýšleným trajektem; nespoléhat na poslední rozumný trajekt kolem 12:40.', reason: 'Čeká dlouhý řetězec: potvrzený NOZOMI 162, regionální vlak, trajekt z Una a příjezd na ostrov. Klidné ráno chrání tím, že Misen není povinnost.',
  },
  'naoshima-01': {
    status: 'RECOMMENDED', wakeUp: 'kolem 08:00', breakfast: 'kolem 08:15–08:35', leave: 'vybrat přesný autobus po kontrole jízdního řádu; taxi, pokud by autobus vytvořil nebezpečnou nebo zbytečně brzkou mezeru', arrival: 'Ougiya Rent-a-Cycle kolem 09:40', buffer: 'Asi 20 minut před potvrzeným vyzvednutím elektrokol v 10:00.', reason: 'Rezervace elektrokol je chráněná při běžném budíčku. Při vyzvednutí ověřit čas vrácení a dostupnost helem.',
  },
  'naoshima-02': {
    status: 'RECOMMENDED', wakeUp: 'kolem 08:00', breakfast: 'kolem 08:30', leave: 'vybrat shuttle Benesse po kontrole jízdního řádu', arrival: 'oblast Chichu Art Museum kolem 10:15', buffer: 'Asi 45 minut před potvrzeným vstupem v 11:00.', reason: 'Je to záměrně pomalý den. Časovaný vstup do muzea je jediná priorita; pláž a další umění zůstávají flexibilní.',
  },
  'himeji-03': {
    status: 'RECOMMENDED', wakeUp: 'kolem 07:00', breakfast: 'kolem 07:20–07:40, se zavazadly sbalenými před snídaní', leave: 'island bus podle pozdější kontroly jízdního řádu; taxi je záloha, ne chůze se zavazadly', arrival: 'Miyanoura Port kolem 09:20', buffer: '20–30 minut před dohodnutým trajektem v 09:52.', reason: 'Druhý nevyhnutelně brzký rodinný start: trajekt, regionální vlaky, Himedži a potvrzený NOZOMI 46 tvoří jeden dlouhý řetězec. V Himedži má přednost hrad; Koko-en se přizpůsobí skutečnému příjezdu a horku.',
  },
  'tokyo-04': {
    status: 'RECOMMENDED',
    reason: 'Jakubova osobní ranní možnost v Toyosu nemění rodinný budíček. Pevný bod rodiny je sushi ve 12:00; návrat na hotel v 16:30 chrání odpočinek, balení a večerní taxi na Hanedu.',
    variants: [
      { title: 'Jakub — sólo Toyosu', wakeUp: 'kolem 04:35', leave: 'taxi kolem 05:00', arrival: 'Toyosu Market / Shijo-mae před dohodnutým cílem kolem 05:30', buffer: 'Přesné sushi zůstává OPEN; návrat do Asakusy do 09:30 musí zůstat pohodlný.', reason: 'Tato brzká možnost je osobní pro Jakuba a neurčuje budíček rodiny.' },
      { title: 'Děti — rodinný program', wakeUp: 'kolem 08:00', breakfast: 'kolem 08:30', leave: 'pěšky kolem 09:30', arrival: 'Sensō-ji kolem 09:50', buffer: 'Asi 10 minut před dohodnutým rodinným startem v 10:00; sushi ve 12:00 je pevná polední priorita.', reason: 'Děti spí déle, zatímco Jakub využije volitelné Toyosu. Návrat na hotel v 16:30 zůstává pevný pro odpočinek, balení a večerní transfer.' },
    ],
  },
  'departure-05': {
    status: 'RECHECK', notApplicable: 'Budíček, snídaně a odchod z hotelu se nepoužijí; let z Hanedy ve 00:05 patří provozně k večeru 4. srpna.', reason: 'Nezobrazovat 5. srpen jako samostatný denní itinerář, když rodina už je v řetězci večerního transferu a nočního letu.', recheck: 'Aerolinku, terminál, požadovaný předstih, check-in a zavazadla převzít z potvrzení letu.',
  },
};
