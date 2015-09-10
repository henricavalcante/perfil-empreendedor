module.exports = {
	fatMask: [11,-22,-33,-44,55],
	correcao: function(sum){
		sum += 18;

		if(sum < 20) return 0;

		if(sum < 22) return 3;

		if(sum < 24) return 5;
		
		return 7;
	},
	competencias: [
		{
			label: "Orientação para a ação e oportunidades",
			mask: [1,12,23,-34,45],
			value: 0
		},
		{
			label: "Persistência",
			mask: [2,13,24-35,46],
			value: 0
		},
		{
			label: "Comprometimento",
			mask: [3,14,25,36,-47],
			value: 0
		},
		{
			label: "Eficiencia e Qualidade",
			mask: [4,15,26,37,48],
			value: 0
		},
		{
			label: "Ponderar e correr riscos calculados",
			mask: [5,16,27,-38,49],
			value: 0
		},
		{
			label: "Objetivos e metas",
			mask: [6,-17,28,39,50],
			value: 0
		},
		{
			label: "Coleta de informações",
			mask: [7,18,-29,40,51],
			value: 0
		},
		{
			label: "Planejamento e Monitoramento",
			mask: [8,19,30,-41,52],
			value: 0
		},
		{
			label: "Rede de contatos e capacidade de persuasão",
			mask: [9,-20,31,42,53],
			value: 0
		},
		{
			label: "Confiança em si mesmo e ser independente",
			mask: [10,-21,32,43,54],
			value: 0
		}
	]

}