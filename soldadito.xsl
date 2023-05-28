<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
					<link rel="stylesheet" type="text/css" href="soldadito.css"/>
			</head>
			
			<body>
				<xsl:apply-templates/>
			</body>
		
		</html>
	</xsl:template>
	
	<xsl:template match="verso">
		<p>
			<xsl:value-of select="."></xsl:value-of>
		</p>
	</xsl:template>
	
	<xsl:template match="estrofa">
		
		<h2>
			-
		</h2>
		<xsl:apply-templates/>
	
	</xsl:template>
	
	<xsl:template match="titulo">
		<span>
			<xsl:value-of select="."></xsl:value-of>
		</span>
	</xsl:template>
		
	<xsl:template match="autor">
		<h3>
			<xsl:value-of select="."></xsl:value-of>
		</h3>
	</xsl:template>
	
</xsl:stylesheet>