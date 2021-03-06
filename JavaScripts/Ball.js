function Ball(pController, pMainContent, pCell, type){
	this.pController = pController;
	this.pMainContent = pMainContent;
	this.pCell = pCell;
	this.pNode = null;
	this.type = parseInt(type);

	//assist
	var self = this;

	this.init = function(){
		var _ballInfo = __BallInfo.getInfo(self.type);
		var _src = "Source/Img/" + _ballInfo.sourceName + ".png";

		var _top	= parseInt(self.pCell.pNode.css('top'));
		var _left	= parseInt(self.pCell.pNode.css('left'));
		var _width	= self.pCell.pNode.css('width');
		var _nodeBall = $('<div class="div_ball"></div>');
		_nodeBall.css({
			"top"	:_top,
			"left"	:_left,
			"width"	:_width,
			"height":_width
		})
		var _nodeImg = $('<img with="100%" height="100%" src="'+ _src +'" />');
		_nodeBall.append(_nodeImg);

		self.pNode = _nodeBall;
		self.pMainContent.pNode.append(_nodeBall);
	}

	self.init();
}