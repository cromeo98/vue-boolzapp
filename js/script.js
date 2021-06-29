const app = new Vue(
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {                        
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent' 
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Giorgio',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '10/05/2021 15:30:00',
                            text: 'Oggi ci sei alla partita?',
                            status: 'sent' 
                        },
                        {
                            date: '10/05/2021 15:37:00',
                            text: 'Penso di sì, ma ti aggiorno più tardi',
                            status: 'received'
                        },
                        {
                            date: '10/05/2021 17:31:00',
                            text: 'Ci vediamo diretti al campo alle 21',
                            status: 'received'
                        },
                        {
                            date: '10/05/2021 17:35:00',
                            text: 'ok',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Riccardo',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '01/01/2021 00:20:05',
                            text: 'Buon anno',
                            status: 'received' 
                        },
                        {
                            date: '01/01/2021 02:30:45',
                            text: 'Buon anno anche a te!',
                            status: 'sent' 
                        }
                    ],
                },
                {
                    name: 'Matteo',
                    avatar: '_5',
                    visible: false,
                    messages: []
                },
                {
                    name: 'Valentina',
                    avatar: '_6',
                    visible: false,
                    messages: []
                },
                {
                    name: 'Michael',
                    avatar: '_7',
                    visible: false,
                    messages: []
                },
                {
                    name: 'Valerio',
                    avatar: '_8',
                    visible: false,
                    messages: []
                }
            ],  
            indice: 0,
            newMsg: ''
        },
        methods: {
            getIndexOfContact(element){
                for(let i = 0; i < this.contacts.length; i++){
                    if(i == element){
                        this.indice = i;
                    }
                }
            },
            addMsg(element){
                console.log(element);
                this.contacts[this.indice].messages.push({'date': dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss'), 'text': element, 'status': 'sent'});
                console.log(this.contacts[this.indice].messages); 
                this.newMsg = ''
            }
        }
    }
);

