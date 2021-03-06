<?php

/*
 * Squelette : squelettes-dist/modeles/article_traductions.html
 * Date :      Mon, 05 Dec 2011 10:08:56 GMT
 * Compile :   Mon, 05 Dec 2011 15:01:47 GMT
 * Boucles :   _traductions, _article
 */ 

/* BOUCLE articles  */

 function BOUCLE_traductionshtml_c5dbc4d2d714a373934a294f98b61723(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $connect = '';
	static $table = 'articles';
	static $id = '_traductions';
	static $from = array('articles' => 'spip_articles');
	static $type = array();
	static $groupby = array();
	static $select = array("articles.lang",
		"articles.id_article",
		"articles.id_rubrique",
		"articles.titre");
	static $orderby = array('articles.lang');
	$where = 
			array(
			array('=', 'articles.statut', '\'publie\''), 
			array('<', 'articles.date', sql_quote(quete_date_postdates())), 
			array('OR', 
			array('AND', 
			array('=', 'articles.id_trad', 0), 
			array('=', 'articles.id_article', sql_quote($Pile[$SP]['id_article']))), 
			array('AND', 
			array('>', 'articles.id_trad', 0), 
			array('=', 'articles.id_trad', sql_quote($Pile[$SP]['id_trad'])))));
	static $join = array();
	static $limit = '';
	static $having = 
			array();
	$t0 = "";
	// REQUETE
	$result = calculer_select($select, $from, $type, $where, $join, $groupby, $orderby, $limit, $having, $table, $id, $connect,
		 array('squelettes-dist/modeles/article_traductions.html','html_c5dbc4d2d714a373934a294f98b61723','_traductions',10,$GLOBALS['spip_lang']));
	if ($result) {
	$Numrows['_traductions']['total'] = @intval(sql_count($result));
	lang_select($GLOBALS['spip_lang']);
	$SP++;
	// RESULTATS
	while ($Pile[$SP] = @sql_fetch($result)) {

		lang_select_public($Pile[$SP]['lang'], '', $Pile[$SP]['titre']);
		$t0 .= (($Numrows['_traductions']['total'] > '1')  ?
		(' ' . (	'
	<span lang="' .
	htmlentities($Pile[$SP]['lang'] ? $Pile[$SP]['lang'] : $GLOBALS['spip_lang']) .
	'" xml:lang="' .
	htmlentities($Pile[$SP]['lang'] ? $Pile[$SP]['lang'] : $GLOBALS['spip_lang']) .
	'" dir="' .
	lang_dir($Pile[$SP]['lang'], 'ltr','rtl') .
	'"' .
	(calcul_exposer($Pile[$SP]['id_article'], 'id_article', $Pile[0], $Pile[$SP]['id_rubrique'], 'id_article', '')  ?
			(' class="' . 'on' . '"') :
			'') .
	'>&#91;' .
	(calcul_exposer($Pile[$SP]['id_article'], 'id_article', $Pile[0], $Pile[$SP]['id_rubrique'], 'id_article', '') ? '' : (	'<a href="' .
		vider_url(urlencode_1738(generer_url_entite($Pile[$SP]['id_article'], 'article', '', '', true))) .
		'" rel="alternate" hreflang="' .
		htmlentities($Pile[$SP]['lang'] ? $Pile[$SP]['lang'] : $GLOBALS['spip_lang']) .
		'"' .
		(($t3 = strval(interdire_scripts(couper(attribut_html(typo($Pile[$SP]['titre'], "TYPO", $connect)),'80'))))!=='' ?
				(' title="' . $t3 . '"') :
				'') .
		'>')) .
	traduire_nom_langue(htmlentities($Pile[$SP]['lang'] ? $Pile[$SP]['lang'] : $GLOBALS['spip_lang'])) .
	(calcul_exposer($Pile[$SP]['id_article'], 'id_article', $Pile[0], $Pile[$SP]['id_rubrique'], 'id_article', '') ? '' : '</a>') .
	'&#93;</span>
	')) :
		'');
	}
	lang_select();
	@sql_free($result);
	}
	return $t0;
}



/* BOUCLE articles  */

 function BOUCLE_articlehtml_c5dbc4d2d714a373934a294f98b61723(&$Cache, &$Pile, &$doublons, &$Numrows, $SP) {

	static $connect = '';
	static $table = 'articles';
	static $id = '_article';
	static $from = array('articles' => 'spip_articles');
	static $type = array();
	static $groupby = array();
	static $select = array("articles.id_trad",
		"articles.id_article",
		"articles.lang",
		"articles.titre");
	static $orderby = array();
	$where = 
			array(
			array('=', 'articles.statut', '\'publie\''), 
			array('<', 'articles.date', sql_quote(quete_date_postdates())), 
			array('=', 'articles.id_article', sql_quote($Pile[0]['id_article'],'','int')));
	static $join = array();
	static $limit = '';
	static $having = 
			array();
	$t0 = "";
	// REQUETE
	$result = calculer_select($select, $from, $type, $where, $join, $groupby, $orderby, $limit, $having, $table, $id, $connect,
		 array('squelettes-dist/modeles/article_traductions.html','html_c5dbc4d2d714a373934a294f98b61723','_article',9,$GLOBALS['spip_lang']));
	if ($result) {
	lang_select($GLOBALS['spip_lang']);
	$SP++;
	// RESULTATS
	while ($Pile[$SP] = @sql_fetch($result)) {

		lang_select_public($Pile[$SP]['lang'], '', $Pile[$SP]['titre']);
		$t0 .= (
'
' .
(($t1 = BOUCLE_traductionshtml_c5dbc4d2d714a373934a294f98b61723($Cache, $Pile, $doublons, $Numrows, $SP))!=='' ?
		((	'
<p class="traductions">
	' .
		_T('public/spip/ecrire:trad_article_traduction') .
		'
	') . $t1 . '
</p>
') :
		'') .
'
');
	}
	lang_select();
	@sql_free($result);
	}
	return $t0;
}


//
// Fonction principale du squelette squelettes-dist/modeles/article_traductions.html
// Temps de compilation total: 2.254 ms
//

function html_c5dbc4d2d714a373934a294f98b61723($Cache, $Pile, $doublons=array(), $Numrows=array(), $SP=0) {


	if (isset($Pile[0]["doublons"]) AND is_array($Pile[0]["doublons"]))
		$doublons = nettoyer_env_doublons($Pile[0]["doublons"]);

	$connect = '';
	$page = BOUCLE_articlehtml_c5dbc4d2d714a373934a294f98b61723($Cache, $Pile, $doublons, $Numrows, $SP);

	return analyse_resultat_skel('html_c5dbc4d2d714a373934a294f98b61723', $Cache, $page, 'squelettes-dist/modeles/article_traductions.html');
}
?>