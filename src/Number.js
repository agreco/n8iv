util.x.cache( 'Number', function( Type ) {
	var abs = Math.abs, big_int = 9007199254740992, floor = Math.floor;

	util.defs( Type, {
// complies with: http://wiki.ecmascript.org/doku.php?id=harmony:number.isinteger
		isInteger : function( v ) { return util.type( v ) =='number' && isFinite( v ) && v > -big_int && v < big_int && floor( v ) === v; },
// complies with: http://wiki.ecmascript.org/doku.php?id=harmony:number.tointeger
		toInteger : function( v ) {
			v = +v;
			if ( isNaN( v ) ) return +0;
			if ( v === 0 || !isFinite( v ) ) return v;
			return ( v < 0 ? -1 : 1 ) * abs( floor( v ) );
		}
	}, 'w' );

	util.defs( Type.prototype, {
		pad   : function( l, radix ) {
			var s = this.toString( radix || 10 );
			return '0'.times( l - s.length ) + s;
		},
		times : function( fn, ctx ) {
			util.range( 0, this ).forEach( fn, ctx || util.global );
			return this;
		},
		toHex : function() { return this.pad( 2, 16 ); }
	}, 'w' );
} );
