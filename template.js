// ASKISI 1 WEBGL Mouzakitis Nikolaos TP4460

// Pyramid and an Octagon.

function setupAttributes()
{
	shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
	gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

	shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
	gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);

	shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
	shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
}

function initBuffers() {
	// Create buffers and send the vertex attributes and indices...
	pyramidVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, pyramidVertexPositionBuffer);

	var vertices = [
	                   // Front face
	                   0.0,  1.0,  0.0,
	                   -1.0, -1.0,  1.0,
	                   1.0, -1.0,  1.0,
	                   // Right face
	                   0.0,  1.0,  0.0,
	                   1.0, -1.0,  1.0,
	                   1.0, -1.0, -1.0,
	                   // Back face
	                   0.0,  1.0,  0.0,
	                   1.0, -1.0, -1.0,
	                   -1.0, -1.0, -1.0,
	                   // Left face
	                   0.0,  1.0,  0.0,
	                   -1.0, -1.0, -1.0,
	                   -1.0, -1.0,  1.0
	               ];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	pyramidVertexPositionBuffer.itemSize = 3;
	pyramidVertexPositionBuffer.numItems = 12;
	pyramidVertexColorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, pyramidVertexColorBuffer);

	var colors = [

	                 // Front face
	                 1.0, 1.0, 1.0, 1.0, //wht
	                 1.0, 0.0, 0.0, 1.0, //red
	                 1.0, 1.0, 0.0, 1.0, //yellow
	                 // Right face
	                 1.0, 1.0, 1.0, 1.0, //wht
	                 1.0, 1.0, 0.0, 1.0,  //yellow
	                 0.0, 1.0, 0.0, 1.0,
	                 // Back face
	                 1.0, 1.0, 1.0, 1.0, //wht
	                 0.0, 1.0, 0.0, 1.0, //green
	                 0.0, 0.0, 1.0, 1.0, //blue
	                 // Left face
	                 1.0, 1.0, 1.0, 1.0, //wht
	                 0.0, 0.0, 1.0, 1.0, //blue
	                 1.0, 0.0, 0.0, 1.0  //red
	             ];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

	pyramidVertexColorBuffer.itemSize = 4;
	pyramidVertexColorBuffer.numItems = 24;
	//**********************************************************************
	//**********************************************************************
	//**********************************************************************
	//**********************************************************************
	//**********************************************************************

	//drawing the octagon

	octagonVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, octagonVertexPositionBuffer);
	var vertices = [
	                   // one
	                   0.0, 0.0, 0.0,
	                   1.0, 0.0, 0.0,
	                   Math.cos(3.1415/4), Math.sin(3.1415/4), 0.0,
			   //two
	                   0.0, 0.0, 0.0,
	                   Math.cos(3.1415/4), Math.sin(3.1415/4), 0.0,
	                   0.0, 1.0, 0.0,
			   
	                   // three
	                   0.0, 0.0, 0.0,
	                   0.0, 1.0, 0.0,
	                   -Math.cos(3.1415/4), Math.sin(3.1415/4), 0.0,
			   //four
	                   0.0, 0.0, 0.0,
	                   -Math.cos(3.1415/4), Math.sin(3.1415/4), 0.0,
	                   -1.0, 0.0, 0.0,
	                   //five
	                   0.0, 0.0, 0.0,
	                   -1.0, 0.0, 0.0,
	                   -Math.cos(3.1415/4), -Math.sin(3.1415/4), 0.0,
	                   //six
			   0.0, 0.0, 0.0,
	                   -Math.cos(3.1415/4), -Math.sin(3.1415/4), 0.0,
	                   0.0, -1.0, 0.0,
	                   //seven
	                   0.0, 0.0, 0.0,
	                   0.0, -1.0, 0.0,
	                   Math.cos(3.1415/4), -Math.sin(3.1415/4), 0.0,
	                   //eight
	                   0.0, 0.0, 0.0,
	                   Math.cos(3.1415/4), -Math.sin(3.1415/4), 0.0,
	                   1.0, 0.0, 0.0
	               ];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	octagonVertexPositionBuffer.itemSize = 3;
	octagonVertexPositionBuffer.numItems = 24;

	octagonVertexColorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, octagonVertexColorBuffer);

	var colors = [

	                 // 1
	                 1.0, 1.0, 1.0, 1.0, //wht
	                 1.0, 1.0, 0.0, 1.0, //yellow
	                 0.0, 1.0, 0.0, 1.0, //green
	                 // 2
	                 1.0, 1.0, 1.0, 1.0, //wht
	                 0.0, 1.0, 0.0, 1.0, //green
	                 0.0, 1.0, 1.0, 1.0,  //cyan
	                 // 3
	                 1.0, 1.0, 1.0, 1.0, //wht
	                 0.0, 1.0, 1.0, 1.0, //cyan
	                 0.0, 0.0, 1.0, 1.0, //blue
	                 // 4
	                 1.0, 1.0, 1.0, 1.0, //wht
	                 0.0, 0.0, 1.0, 1.0, //blue
	                 1.0, 0.0, 1.0, 1.0,  //magenta
	                 // 5
	                 1.0, 1.0, 1.0, 1.0, //wht
	                 1.0, 0.0, 1.0, 1.0,  //magenta
	                 1.0, 0.0, 0.0, 1.0, //red
	                 // 6
	                 1.0, 1.0, 1.0, 1.0, //wht
	                 1.0, 0.0, 0.0, 1.0, //red
	                 1.0, 1.0, 0.0, 1.0, // yellow
	                 // 7
	                 1.0, 1.0, 1.0, 1.0, //wht
	                 1.0, 1.0, 0.0, 1.0, //yellow
	                 1.0, 0.0, 0.0, 1.0, //red
	                 // 8
	                 1.0, 1.0, 1.0, 1.0, //wht
	                 1.0, 0.0, 0.0, 1.0, //red
	                 1.0, 1.0, 0.0, 1.0,  //yellow
	             ];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
	octagonVertexColorBuffer.itemSize = 4;
	octagonVertexColorBuffer.numItems = 24;
}

function drawScene() {


	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	mat4.perspective(30, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);

	mat4.identity(mvMatrix);

	// Connect the attributes with the shaders and draw...

	mat4.translate(mvMatrix, [-1.5, 0.0, -8.0]);
	// rotation
	mat4.rotate(mvMatrix, 3.14/4, [0, 1, 0]);

	// drawing the pyramid.
	gl.bindBuffer(gl.ARRAY_BUFFER, pyramidVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, pyramidVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, pyramidVertexColorBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, pyramidVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLES, 0, pyramidVertexPositionBuffer.numItems);
	
	// drawing the octagon.

	mat4.translate(mvMatrix, [2.5, 0.0, 2.0]);
	mat4.translate(mvMatrix, [1.0, 0.0, 0.0]);
	mat4.scale(mvMatrix, [1.4, 1.4, 1.4]);
	mat4.rotate(mvMatrix, -3.14/4, [0, 1, 0]);
	gl.bindBuffer(gl.ARRAY_BUFFER, octagonVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, octagonVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, octagonVertexColorBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, octagonVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLES, 0, octagonVertexPositionBuffer.numItems);

}

function webGLStart() {
	
	let canvas = document.getElementById("canvas");
	document.getElementById("Button").onclick= function() { axis = xAxis;};	

	initGL(canvas);
	initShaders();
	setupAttributes();
	initBuffers();

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.enable(gl.DEPTH_TEST);
	

	// make it rotate around axes.	
	drawScene();
}
